import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import MyModal from "./Mymodal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Home() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>open</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <MyModal onPress={setModalVisible} />
      </Modal>
    </View>
  );
}
