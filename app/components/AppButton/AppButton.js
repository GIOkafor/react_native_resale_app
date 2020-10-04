import React from "react";
import { Button, Text, View } from "react-native";

import colors from "../../config/colors";

function AppButton({ children }) {
  //return <Button title={children} color={colors.primary} />;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonContents}>{children}</Text>
    </View>
  );
}

const styles = {
  buttonContainer: {
    width: "80%",
  },
  buttonContents: {
    backgroundColor: colors.primary,
    color: "#fff",
    padding: 10,
    textAlign: "center",
    borderRadius: 20,
  },
};

export default AppButton;
