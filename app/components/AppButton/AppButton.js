import React from "react";
import { Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

function AppButton({ children, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor:
            children === "Login" ? colors.primary : colors.secondary,
        },
        styles.buttonContainer,
      ]}
    >
      <Text style={styles.buttonContents}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonContainer: {
    width: "90%",
    borderRadius: 20,
    padding: 12,
    margin: 10,
  },
  buttonContents: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default AppButton;
