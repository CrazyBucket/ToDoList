import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import CardList from "../CardList";
import cardStyles from "./styles";

const Card = () => {
  const [showDone, setShowDone] = useState(false);

  return (
    <KeyboardAvoidingView style={cardStyles.container} behavior="padding">
      <View style={cardStyles.switch}>
        <Text onPress={() => setShowDone(false)}>ToDo</Text>
        <Text onPress={() => setShowDone(true)}>Done</Text>
        <View
          style={{
            backgroundColor: "#B9D3F7",
            width: 45,
            height: 7,
            position: "absolute",
            top: 10,
            zIndex: -1,
          }}
        ></View>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <CardList
            isDone={showDone}
            items={
              showDone
                ? [
                    "item 1",
                    "item 2",
                    "item 3",
                    "item 1",
                    "item 2",
                    "item 3",
                    "item 1",
                    "item 2",
                    "item 3",
                  ]
                : ["d", "d", "d3"]
            }
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Card;
