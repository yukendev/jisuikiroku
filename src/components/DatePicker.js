import React from "react";
import { StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

const styles = StyleSheet.create({
  datePicker: {
    marginBottom: 100,
    backgroundColor: "#fff",
    width: "60%",
    marginBottom: 0,
    marginTop: 20,
  },
});

export default function MyDatePicker({ setDate, date }) {
  return (
    <DatePicker
      style={styles.datePicker}
      locale={"ja"}
      date={date}
      confirmBtnText="完了"
      cancelBtnText="キャンセル"
      onDateChange={(date) => setDate(date)}
      showIcon={false}
      customStyles={{
        dateInput: { borderWidth: 1, borderRadius: 4 },
      }}
    />
  );
}
