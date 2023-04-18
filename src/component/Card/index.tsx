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
  <View
    style={{
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "row",
    }}
  >
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#B9D3F7",
        height: 7,
        width: 45,
        marginLeft: 50,
      }}
      style={{
        backgroundColor: "rgba(241, 238, 255, 0.55)",
        borderWidth: 0,
        shadowOpacity: 0,
      }}
      tabStyle={{ width: 145 }}
      labelStyle={{
        color: "#000",
        height: 7,
        marginBottom: -10,
      }}
    />
  </View>
);

const Card = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "ToDo" },
    { key: "second", title: "Done" },
  ]);
  return (
    <KeyboardAvoidingView style={cardStyles.container} behavior="padding">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      ></TabView>
    </KeyboardAvoidingView>
  );
};

export default Card;
