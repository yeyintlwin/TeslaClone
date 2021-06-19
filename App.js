import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CardItem from "./components/CarItem/";

export default function App() {
  return (
    <View style={styles.container}>
      <CardItem
        name={"Modal X"}
        tagline={"Order Online For"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/ModelX.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
