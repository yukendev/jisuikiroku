import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: "orange",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselText: {
    fontSize: 90,
  },
  wrapper: {
    position: "absolute",
    bottom: 130,
  },
});

export default function MyCarousel() {
  const data = [
    { title: "a" },
    { title: "b" },
    { title: "c" },
    { title: "d" },
    { title: "e" },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselContainer}>
        <Text style={styles.carouselText}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Carousel
        data={data}
        renderItem={renderItem}
        itemWidth={Dimensions.get("window").width * 0.85}
        sliderWidth={Dimensions.get("window").width}
      />
    </View>
  );
}
