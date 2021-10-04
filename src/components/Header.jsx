import React from "react";
import { Animated, Text, View } from "react-native";

const Header = ({ bgInterpolation, bgColor }) => {
  const styles = {
    container: {
      backgroundColor: bgInterpolation || bgColor,
      height: 120,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    headingWrapper: {
      height: 60,
      justifyContent: "center",
    },
    headingText: {
      // color: bgInterpolation,
      fontSize: 32,
      fontWeight: "bold",
    },
  };

  return (
    <Animated.View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Select Character</Text>
      </View>
    </Animated.View>
  );
};

export default Header;
