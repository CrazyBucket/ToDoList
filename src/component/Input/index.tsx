import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "./styles";

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="AddTodo"
        placeholderTextColor="#C5CFFC"
        selectionColor="transparent"
        underlineColorAndroid="transparent"
        style={{
          borderWidth: 0,
          borderColor: "transparent",
        }}
      />
    </View>
  );
};

export default Input;
