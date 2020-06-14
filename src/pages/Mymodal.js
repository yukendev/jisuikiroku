import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function MyModal({ onPress }) {
  return (
    <View style={styles.container}>
      <Text>modal</Text>
      <TouchableOpacity onPress={() => onPress(false)}>
        <Text>close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
