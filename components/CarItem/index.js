import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CardItem = (props) => {
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

      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.warn("Custom Order was Pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content="Existing Inventory"
        onPress={() => {
          console.warn("Existing Inventory was Pressed");
        }}
      />
    </View>
  );
};

export default CardItem;
