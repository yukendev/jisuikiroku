import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 45,
    color: "#fff",
    paddingBottom: 4,
  },
});

export default CircleButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(true)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
