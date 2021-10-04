import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
  },
  circleActive: { backgroundColor: "brown" },
  line: {
    width: 20,
    height: 2,
    backgroundColor: "yellow",
  },
});

const ProgressIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.line}></View>
      <View style={styles.circle}></View>
      <View style={styles.line}></View>
      <View style={[styles.circle, styles.circleActive]}></View>
    </View>
  );
};

export default ProgressIndicator;
