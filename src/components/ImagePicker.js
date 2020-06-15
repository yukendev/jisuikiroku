import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";

export default function MyImagePicker() {
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
    <View>
      <Button onPress={pickImage}>カメラロールから選択</Button>
      {image && (
        <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      )}
    </View>
  );
}
