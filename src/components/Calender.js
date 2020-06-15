import React from "react";
import { StyleSheet, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const styles = StyleSheet.create({
  calender: {
    width: "100%",
  },
});

export default function MyCalender() {
  return <Calendar theme={{ arrowColor: "orange" }} />;
}
