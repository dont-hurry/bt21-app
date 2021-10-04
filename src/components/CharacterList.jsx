import helper from "../helper";

import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Padding from "./Padding";

const characterImg = {
  koya: require("../../assets/characters/koya.webp"),
  rj: require("../../assets/characters/rj.webp"),
  shooky: require("../../assets/characters/shooky.webp"),
  mang: require("../../assets/characters/mang.webp"),
  chimmy: require("../../assets/characters/chimmy.webp"),
  tata: require("../../assets/characters/tata.webp"),
  cooky: require("../../assets/characters/cooky.webp"),
  van: require("../../assets/characters/van.webp"),
};

const characters = [
  "koya",
  "rj",
  "shooky",
  "mang",
  "chimmy",
  "tata",
  "cooky",
  "van",
];

const styles = StyleSheet.create({
  flatList: {
    flexShrink: 0,
  },
  characterBlock: {
    padding: 5,
    borderWidth: 5,
  },
  characterBlockImg: {
    width: 100,
    height: 100,
  },
});

const Separator = () => {
  return <View style={{ width: 10 }} />;
};

const ListHeader = () => {
  return <View style={{ width: 15 }} />;
};

const ListFooter = () => {
  return <View style={{ width: 15 }} />;
};

const CharacterList = ({ selectCharacter }) => {
  const handlePress = (character) => {
    selectCharacter(character);
  };

  const characterBlock = ({ item }) => {
    const character = item;

    return (
      <TouchableWithoutFeedback onPress={() => handlePress(character)}>
        <View
          style={[
            styles.characterBlock,
            { backgroundColor: helper.bgColor(character) },
          ]}
        >
          <Image
            source={characterImg[character]}
            style={styles.characterBlockImg}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View>
      <Padding backgroundColor="#ffffff" height={10} />
      <FlatList
        data={characters}
        renderItem={characterBlock}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        keyExtractor={(item) => item}
        style={styles.flatList}
        horizontal
      />
      <Padding backgroundColor="#ffffff" height={20} />
    </View>
  );
};

export default CharacterList;
