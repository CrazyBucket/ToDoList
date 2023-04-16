import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

interface CardListProps {
  items: string[];
  isDone: boolean;
}

const CardList = ({ items, isDone }: CardListProps) => {
  return (
    <View style={[styles.container, { alignItems: "stretch" }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CardList;
