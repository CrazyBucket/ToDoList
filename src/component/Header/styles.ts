import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  title: {
    position: "relative",
    color: "#1F009C",
    fontWeight: "700",
    fontSize: 64,
    lineHeight: 77,
    zIndex: 2,
  },
  bcTitle: {
    left: 4,
    top: 2,
    position: "absolute",
    color: "#1F009C5C",
    fontWeight: "700",
    fontSize: 64,
    lineHeight: 77,
    zIndex: 1,
  },
  underLine: {
    position: "absolute",
    width: 300,
    height: 12,
    backgroundColor: "#8272FF4A",
    bottom: 27,
    zIndex: 0.5,
  },
  subTitle: {
    color: "#6784F0",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
});

export default headerStyles;
