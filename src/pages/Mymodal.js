import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import MyDatePicker from "../components/DatePicker";
import MyImagePicker from "../components/ImagePicker";
import * as ImagePicker from "expo-image-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 360,
    height: 600,
    backgroundColor: "#ddd",
    alignItems: "center",
    borderRadius: 7,
    justifyContent: "flex-start",
    opacity: 0.9,
  },
  nameText: {
    width: "90%",
    marginTop: 20,
  },
  commentText: {
    width: "90%",
    height: 100,
    marginTop: 20,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#fff",
    borderRadius: 4,
    marginTop: 30,
  },
  addText: {
    fontSize: 20,
    padding: 10,
    color: "gray",
  },
});

export default function MyModal({ onPress }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <MyDatePicker setDate={setDate} date={date} />
        <TextInput
          label="料理名"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          style={styles.nameText}
          theme={{
            colors: { primary: "darkorange" },
          }}
        />
        <TextInput
          label="コメント"
          value={comment}
          onChangeText={(text) => setComment(text)}
          mode="outlined"
          multiline={true}
          style={styles.commentText}
          blurOnSubmit={true}
          theme={{
            colors: { primary: "darkorange" },
          }}
        />
        <MyImagePicker pickImage={pickImage} image={image} />
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
