import React from "react";
import { View, Text, ScrollView } from "react-native";
import useDoneListStore from "../../store/done";
import useTodoListStore from "../../store/todo";

import styles from "./styles";

interface CardListProps {
  isDone: boolean;
}

const CardList = ({ isDone }: CardListProps) => {
  const { todos } = useTodoListStore();
  const { doneList } = useDoneListStore();
  const items = isDone ? doneList : todos;

  return (
    <View style={[styles.container, { alignItems: "stretch" }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CardList;
