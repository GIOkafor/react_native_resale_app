import React from "react";
import { View, Image, ImageBackground, Text } from "react-native";

export default function App() {
  /*
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <ImageBackground
        style={{
          flex: 8,
          alignItems: "center",
          paddingTop: 50,
        }}
        source={require("./assets/background.jpg")}
      >
        <Image
          source={require("./assets/logo-red.png")}
          style={{
            height: 100,
            width: 100,
          }}
        />
        <Text>Sell What You Don't Need</Text>
      </ImageBackground>

      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
  */

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "tomato",
            height: 50,
            width: 50,
          }}
        />
        <View
          style={{
            backgroundColor: "green",
            height: 50,
            width: 50,
          }}
        />
      </View>
      <Image
        source={require("./assets/chair.jpg")}
        style={{
          height: 500,
          alignSelf: "center",
        }}
      />
    </View>
  );
}
