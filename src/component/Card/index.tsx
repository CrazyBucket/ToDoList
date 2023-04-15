import React, { useState } from "react";
import { View, Text } from "react-native";
import CardList from "../CardList";
import cardStyles from "./styles";

const Card = () => {
  const [showDone, setShowDone] = useState(false);

  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.switch}>
        <Text onPress={() => setShowDone(false)}>ToDo</Text>
        <Text onPress={() => setShowDone(true)}>Done</Text>
        <View
          style={{
            backgroundColor: "#5B72FFB2",
            width: 45,
            height: 7,
            position: "absolute",
            top: 10,
          }}
        ></View>
      </View>
      <CardList
        isDone={showDone}
        items={showDone ? ["item 1", "item 2", "item 3"] : ["d", "d", "d3"]}
      />
    </View>
  );
};

export default Card;
