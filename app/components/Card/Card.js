import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";

function Card({ name, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{name}</AppText>
        <AppText style={styles.subTitle}>${subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 0,
    flexDirection: "column",
    marginBottom: 30,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    marginBottom: 7,
  },
});

export default Card;
//"../../assets/red_jacket.jpg"
