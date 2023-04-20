import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import useTodoListStore from "../../store/todo";
import { SwipeListView } from "react-native-swipe-list-view";
import styles from "./styles";
import useDoneListStore from "../../store/done";

interface CardListProps {
  isDone: boolean;
}

const CardList = ({ isDone }: CardListProps) => {
  const { todos, moveTodoToTop, deleteTodo } = useTodoListStore();
  const { doneList, deleteDoneItem, undo } = useDoneListStore();
  const items = isDone ? doneList : todos;

  const renderHiddenItem = (data: { index: number }, rowMap: any) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={styles.todoLeft}
          onPress={() => (isDone ? undo() : moveTodoToTop(data.index))}
        >
          <Text>{isDone ? "Undo" : "Top"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.todoRight,
            isDone
              ? { backgroundColor: "#FFADAD" }
              : { backgroundColor: "#D9DEFD" },
          ]}
          onPress={() =>
            isDone ? deleteDoneItem(data.index) : deleteTodo(data.index)
          }
        >
          <Text>{isDone ? "Delete" : "Done"}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.container, { alignItems: "stretch" }]}>
      <SwipeListView
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.listItem}>
            <Text
              style={[
                styles.listItemText,
                isDone
                  ? { color: "#ABABAB", textDecorationLine: "line-through" }
                  : { color: "#000" },
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={isDone ? -85 : -75}
      />
    </View>
  );
};

export default CardList;