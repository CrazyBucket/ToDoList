import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "./styles";
import useTodoStore from "../../store/todo";

const Input = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore(state => state.addTodo);
  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

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
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAddTodo}
      />
    </View>
  );
};

export default Input;
