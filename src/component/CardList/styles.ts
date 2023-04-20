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
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  todoLeft: {
    backgroundColor: "#CFFBF4",
    width: 80,
    height: "100%",
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  todoRight: {
    width: "50%",
    height: "100%",
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
});

export default styles;
