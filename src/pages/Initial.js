import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
  },
});

export default function Initial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Initial</Text>
      <Button
        color="orange"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
        labelStyle={{ color: "#fff", fontSize: 25 }}
      >
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("Signup")}
        color="orange"
        mode="contained"
        style={styles.button}
        labelStyle={{ color: "#fff", fontSize: 25 }}
      >
        Signup
      </Button>
    </View>
  );
}
