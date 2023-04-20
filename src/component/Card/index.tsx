import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CardList from "../CardList";
import cardStyles from "./styles";

const FirstRoute = () => (
  <View style={{ flex: 1 }}>
    <CardList isDone={false} />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <CardList isDone={true} />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props: any) => {
  // 定义一个函数用于计算 marginLeft 值
  const getIndicatorMarginLeft = (width: number, count: number) => {
    const tabBarWidth = width - 32;
    const tabWidth = tabBarWidth / count;
    const marginLeft = tabWidth / 2 - 16;
    return marginLeft;
  };

  return (
    <TabBar
      pressColor="#D4CDFF94"
      pressOpacity={0.8}
      {...props}
      indicatorStyle={{
        backgroundColor: "#B9D3F7",
        height: 7,
        width: 45,
        marginLeft: getIndicatorMarginLeft(
          props.layout.width,
          props.navigationState.routes.length
        ),
      }}
      style={{
        backgroundColor: "#e7eaf9",
        borderWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
        borderRadius: 25,
      }}
      labelStyle={{
        color: "#000",
        marginBottom: -20,
        zIndex: 10,
      }}
    />
  );
};

const Card = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "ToDo" },
    { key: "second", title: "Done" },
  ]);

  return (
    <View style={{ flex: 1, flexGrow: 1 }}>
      <KeyboardAvoidingView style={cardStyles.container} behavior="height">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          swipeEnabled={false}
        ></TabView>
      </KeyboardAvoidingView>
    </View>
  );
};


export default Card;
