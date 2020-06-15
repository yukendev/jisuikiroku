import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    borderColor: "black",
    width: 250,
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
  },
});

export default function MyImagePicker({ pickImage, image }) {
  return (
    <View style={styles.imageContainer}>
      {image ? (
        <TouchableWithoutFeedback onPress={pickImage}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </TouchableWithoutFeedback>
      ) : (
        <Button icon="plus" onPress={pickImage} color="#ddd">
          カメラロールから選択
        </Button>
      )}
    </View>
  );
}
