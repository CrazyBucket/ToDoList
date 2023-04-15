import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(241, 238, 255, 0.55)",
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 75,
    },
    shadowOpacity: 0.07,
    shadowRadius: 229,
    elevation: 5,
  },
  switch: {
    marginTop: 22,
    marginBottom: 33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: 16,
    lineHeight: 20,
  },
});

export default cardStyles;
