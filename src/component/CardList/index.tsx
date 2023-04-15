import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface CardListProps {
  items: string[];
  isDone: boolean;
}

const CardList = ({ items, isDone }: CardListProps) => {
  return (
    <View>
      {items.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default CardList;
