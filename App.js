import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card/Card";
import AppButton from "./app/components/AppButton/AppButton";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  //return <ViewImageScreen />;
  //return <WelcomeScreen />;
  //return <AppButton onPress={() => console.log("tapped")}>Login</AppButton>;
  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({});
