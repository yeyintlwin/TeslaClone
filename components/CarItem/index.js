import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";

const CardItem = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,428</Text>
      </View>
    </View>
  );
};

export default CardItem;
