import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AnimatedCircle from "../AnimatedCircle";
import styles from "./styles";

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
      <AnimatedCircle color="#D4CDFF94" size={200} />
      <View style={{ paddingLeft: 200, paddingBottom: 50 }}>
        <AnimatedCircle color="#C2FFF094" size={300} />
      </View>
      <View style={{ position: "relative" }}>
        <Text style={styles.title}>
          ToDoList<Text style={styles.bcTitle}>ToDoList</Text>
        </Text>
        <View style={styles.underLine}></View>
        <Text style={styles.subTitle}>you have to do something</Text>
      </View>
    </View>
  );
};

export default Header;
