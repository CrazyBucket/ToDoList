import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./src/component/Header";
import Input from "./src/component/Input";
import Card from "./src/component/Card";
// import Card from "@components/Card";

export default function App() {
  return (
    <LinearGradient
      colors={["rgba(151, 255, 236, 0.3)", "rgba(128, 140, 255, 0.3)"]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={{ overflow: "hidden" }}>
        <Header />
        <Input />
      </View>
      <Card />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
