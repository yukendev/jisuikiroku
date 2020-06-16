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
    borderColor: "gray",
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    borderRadius: 5,
    width: 198,
    height: 198,
  },
});

export default function MyImagePicker({ pickImage, image }) {
  return (
    <View style={styles.imageContainer}>
      {image ? (
        <TouchableWithoutFeedback onPress={pickImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableWithoutFeedback>
      ) : (
        <Button icon="plus" onPress={pickImage} color="#ddd">
          カメラロールから選択
        </Button>
      )}
    </View>
  );
}
