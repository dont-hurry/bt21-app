import helper from "../helper";

import React from "react";
import { Animated, Image, Text, View } from "react-native";

import Padding from "./Padding";

const AVATAR_BLOCK_SIZE = 240;
const BORDER_WIDTH = 5;
const BORDER_RADIUS = 15;
const AVATAR_SIZE = 200;

const HorizontalLine = ({ backgroundColor }) => {
  const styles = {
    container: {
      flexGrow: 1,
      height: AVATAR_BLOCK_SIZE,
    },
    line: {
      backgroundColor,
      height: (AVATAR_BLOCK_SIZE - BORDER_WIDTH) / 2,
      borderBottomWidth: BORDER_WIDTH,
    },
  };

  return (
    <View style={styles.container}>
      <Animated.View style={styles.line} />
    </View>
  );
};

const CharacterInfo = ({
  character,
  description,
  bgColor,
  bgInterpolation,
}) => {
  const avatarUri = `https://www.bt21.com/img/character/bt21/${character}.gif`;

  const styles = {
    rowContainer: { flexDirection: "row" },
    avatarBlock: {
      width: AVATAR_BLOCK_SIZE,
    },
    avatarHeaderContainer: {
      backgroundColor: bgInterpolation || bgColor,
    },
    avatarHeader: {
      backgroundColor: "#ffffff",
      height: BORDER_WIDTH + BORDER_RADIUS * 2,
      borderTopWidth: BORDER_WIDTH,
      borderRightWidth: BORDER_WIDTH,
      borderLeftWidth: BORDER_WIDTH,
      borderTopLeftRadius: BORDER_RADIUS,
      borderTopRightRadius: BORDER_RADIUS,
    },
    avatarBody: {
      height: AVATAR_BLOCK_SIZE - (BORDER_WIDTH + BORDER_RADIUS * 2),
      borderRightWidth: BORDER_WIDTH,
      borderBottomWidth: BORDER_WIDTH,
      borderLeftWidth: BORDER_WIDTH,
      borderBottomRightRadius: BORDER_RADIUS,
      borderBottomLeftRadius: BORDER_RADIUS,
      alignItems: "center",
    },
    avatarImgWrapper: {
      marginTop:
        (AVATAR_BLOCK_SIZE - AVATAR_SIZE) / 2 -
        (BORDER_WIDTH + BORDER_RADIUS * 2),
    },
    nameWrapper: {
      alignItems: "center",
    },
    nameText: {
      fontSize: 28,
      fontWeight: "bold",
      textTransform: "capitalize",
      textShadowColor: helper.setAlpha(bgColor, 0.4),
      textShadowOffset: { width: 2.5, height: 5 },
      textShadowRadius: 1,
    },
    descriptionWrapper: {
      paddingRight: 20,
      paddingLeft: 20,
      height: 140,
    },
    descriptionText: {
      fontSize: 18,
      lineHeight: 28,
    },
  };

  return (
    <View>
      <Padding backgroundColor={bgInterpolation || bgColor} height={20} />

      <View style={styles.rowContainer}>
        <HorizontalLine backgroundColor={bgInterpolation || bgColor} />

        <View style={styles.avatarBlock}>
          <Animated.View style={styles.avatarHeaderContainer}>
            <View style={styles.avatarHeader} />
          </Animated.View>

          <View style={styles.avatarBody}>
            <View style={styles.avatarImgWrapper}>
              <Image
                source={{
                  uri: avatarUri,
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                }}
                style={styles.avatarImg}
              />
            </View>
          </View>
        </View>

        <HorizontalLine backgroundColor={bgInterpolation || bgColor} />
      </View>

      <Padding backgroundColor="#ffffff" height={15} />

      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>{character}</Text>
      </View>

      <Padding backgroundColor="#ffffff" height={5} />

      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

export default CharacterInfo;
