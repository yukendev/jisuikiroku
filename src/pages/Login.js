import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import firebase from "firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "40%",
    marginTop: 40,
  },
  textInput: {
    width: "90%",
    marginTop: 20,
  },
});

const login = (email, password, navigation) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => console.log(user.user.email), navigation.navigate("Home"))
    .catch((error) => console.log(error));
};

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="email"
        value={email}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        theme={{
          colors: { primary: "darkorange" },
        }}
        style={styles.textInput}
      />
      <TextInput
        mode="outlined"
        label="password"
        value={password}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        theme={{
          colors: { primary: "darkorange" },
        }}
        style={styles.textInput}
      />
      <Button
        color="orange"
        mode="contained"
        style={styles.button}
        labelStyle={{ color: "#fff", fontSize: 25 }}
        onPress={() => login(email, password, navigation)}
      >
        Login
      </Button>
    </View>
  );
}
