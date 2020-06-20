import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const styles = StyleSheet.create({
  calender: {
    width: "100%",
  },
});

export default function MyCalender({ date, setDate }) {
  const dt = new Date(date);
  const y = dt.getFullYear();
  const m = ("00" + (dt.getMonth() + 1)).slice(-2);
  const d = ("00" + dt.getDate()).slice(-2);
  const result = y + "-" + m + "-" + d;
  const mark = {
    [`${result}`]: { selected: true, selectedColor: "orange" },
  };
  return (
    <View>
      <Calendar
        theme={{
          arrowColor: "orange",
          todayTextColor: "orange",
        }}
        markedDates={mark}
        onDayPress={(day) => setDate(day.dateString)}
      />
    </View>
  );
}
