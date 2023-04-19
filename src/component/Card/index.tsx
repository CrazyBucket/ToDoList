import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
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

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: "#B9D3F7",
      height: 7,
      width: 45,
      marginLeft: 60,
    }}
    style={{
      backgroundColor: "#e7eaf9",
      borderWidth: 0,
      shadowOpacity: 0,
      elevation: 0,
    }}
    labelStyle={{
      color: "#000",
      marginBottom: -20,
      zIndex: 10,
    }}
  />
);

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
        ></TabView>
      </KeyboardAvoidingView>
    </View>
  );
};


export default Card;
