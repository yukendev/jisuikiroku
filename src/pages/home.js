import React, { useState } from "react";
import { Text, View, StyleSheet, Modal } from "react-native";
import MyModal from "./Mymodal";
import CircleButton from "../components/CircleButton";
import MyCalender from "../components/Calender";
import MyCarousel from "../components/Carousel";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    marginTop: 60,
  },
  buttonWrapper: {
    position: "absolute",
    right: 30,
    bottom: 40,
  },
});

export default function Home() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <MyCalender />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <MyModal onPress={setModalVisible} />
      </Modal>
      <MyCarousel />
      <View style={styles.buttonWrapper}>
        <CircleButton onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}
