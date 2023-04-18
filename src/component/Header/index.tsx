import React from "react";
import { View, Text } from "react-native";
import AnimatedCircle from "../AnimatedCircle";
import headerStyles from "./styles";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: 60,
        paddingLeft: 15,
        paddingTop: 120,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: 0,
          height: 0,
        }}
      >
        <View style={{ paddingLeft: 100, marginTop: 50 }}>
          <AnimatedCircle color="#D4CDFF94" size={200} />
        </View>
        <View style={{ paddingLeft: 200 }}>
          <AnimatedCircle color="#C2FFF094" size={300} />
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <Text style={headerStyles.title}>ToDoList</Text>
        <Text style={headerStyles.bcTitle}>ToDoList</Text>
        <View style={headerStyles.underLine}></View>
        <Text style={headerStyles.subTitle}>you have to do something</Text>
      </View>
    </View>
  );
};

export default Header;
