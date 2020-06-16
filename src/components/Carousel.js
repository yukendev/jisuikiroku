import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const styles = StyleSheet.create({
  carouselContainer: {
    borderWidth: 5,
    borderColor: "orange",
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
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default function MyCarousel() {
  const images = [];
  const data = [
    { image: require("../../assets/asparagus-2169305_1920.jpg") },
    { image: require("../../assets/coffee-3727673_1920.jpg") },
    { image: require("../../assets/fried-3409076_1920.jpg") },
    { image: require("../../assets/pancakes-2291908_1920.jpg") },
    { image: require("../../assets/sandwich-2977251_1920.jpg") },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselContainer}>
        <Image source={item.image} style={styles.image} />
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
