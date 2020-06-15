import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import MyDatePicker from "../components/DatePicker";
import MyImagePicker from "../components/ImagePicker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    height: 500,
    backgroundColor: "#ddd",
    alignItems: "center",
  },
  nameText: {
    width: "90%",
    marginTop: 10,
    marginBottom: 20,
  },
  commentText: {
    width: "90%",
    marginBottom: 20,
    height: 100,
  },
  addButton: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  addText: {
    fontSize: 20,
    padding: 5,
  },
});

export default function MyModal({ onPress }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <MyImagePicker />
        <MyDatePicker setDate={setDate} date={date} />
        <TextInput
          label="料理名"
          value={name}
          onChangeText={(text) => setName({ text })}
          mode="outlined"
          style={styles.nameText}
        />
        <TextInput
          label="コメント"
          value={comment}
          onChangeText={(text) => setComment({ text })}
          mode="outlined"
          multiline={true}
          style={styles.commentText}
          blurOnSubmit={true}
        />

        <TouchableOpacity
          onPress={() => onPress(false)}
          style={styles.addButton}
        >
          <Text style={styles.addText}>追加する</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
