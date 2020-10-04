import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  //closeIcon, deleteIcon
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        size={30}
        style={styles.closeIcon}
      ></MaterialCommunityIcons>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={30}
        style={styles.deleteIcon}
      ></MaterialCommunityIcons>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    color: "#fff",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
