import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

interface Props {
  color: string;
  size: number;
}

const AnimatedCircle: React.FC<Props> = ({ color, size }) => {
  const animatedValueX = useRef(new Animated.Value(0)).current;
  const animatedValueY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveX = () => {
      Animated.timing(animatedValueX, {
        toValue: Math.random() * size - size / 2,
        duration: 4000,
        useNativeDriver: true,
      }).start(moveX);
    };

    const moveY = () => {
      Animated.timing(animatedValueY, {
        toValue: Math.random() * size - size / 2,
        duration: 4000,
        useNativeDriver: true,
      }).start(moveY);
    };

    moveX();
    moveY();
  }, []);

  const animatedStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
    transform: [
      {
        translateX: animatedValueX,
      },
      {
        translateY: animatedValueY,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  circle: {
    backgroundColor: "transparent",
    position: "absolute",
  },
});

export default AnimatedCircle;
