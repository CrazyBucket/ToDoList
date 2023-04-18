import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  listItem: {
    backgroundColor: "#F1F2FA",
    marginBottom: 15,
    minHeight: 70,
    borderRadius: 10,
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    padding: 10,
    justifyContent: "center",
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "400",
    paddingLeft: 30,
  },
});

export default styles;
