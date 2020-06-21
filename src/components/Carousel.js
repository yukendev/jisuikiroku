import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const styles = StyleSheet.create({
  carouselContainer: {
    borderWidth: 5,
    borderColor: "orange",
    height: 200,
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

export default function MyCarousel({ date, setDate }) {
  const dt = new Date(date);
  const selectedDate = ("00" + dt.getDate()).slice(-2);
  const month = ("00" + (dt.getMonth() + 1)).slice(-2);
  const year = dt.getFullYear();
  const howManyDays = new Date(`${year}`, `${month}`, 0).getDate();

  const datas = [];

  for (let i = 1; i <= howManyDays; i++) {
    datas.push(`${year}-${month}-${i}`);
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselContainer}>
        <Text>{item}</Text>
      </View>
    );
  };

  const carouselDate = (index) => {
    const num = index + 1;
    const carouselDate = `${year}-${month}-${("00" + num).slice(-2)}`;
    setDate(carouselDate);
  };

  return (
    <View style={styles.wrapper}>
      <Carousel
        data={datas}
        renderItem={renderItem}
        itemWidth={Dimensions.get("window").width * 0.5}
        sliderWidth={Dimensions.get("window").width}
        firstItem={`${selectedDate}` - 1}
        onSnapToItem={(index) => carouselDate(index)}
      />
    </View>
  );
}
