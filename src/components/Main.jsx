import helper from "../helper";

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Animated, View } from "react-native";

import Header from "./Header";
import CharacterInfo from "./CharacterInfo";
import CharacterList from "./CharacterList";
import SubmitButton from "./SubmitButton";

const Main = () => {
  const [character, setCharacter] = useState("koya");
  const [prevBgColor, setPrevBgColor] = useState(helper.bgColor(character));

  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [bgInterpolation, setBgInterpolation] = useState();

  const statusBarStyle = helper.statusBarStyle(character);
  const bgColor = helper.bgColor(character);

  const selectCharacter = (c) => {
    setCharacter(c);

    let nextBgColor = helper.bgColor(c);
    console.log(nextBgColor);

    setAnimation(new Animated.Value(0));
    setBgInterpolation(
      animation.interpolate({
        inputRange: [0, 1],
        outputRange: [prevBgColor, nextBgColor],
      })
    );

    Animated.timing(animation, {
      toValue: 1,
      duration: 350,
      useNativeDriver: false, // ?
    }).start(() => {
      setPrevBgColor(nextBgColor);
    });
  };

  return (
    <View>
      <StatusBar style={statusBarStyle} />
      <Header bgColor={bgColor} bgInterpolation={bgInterpolation} />
      <CharacterInfo
        character={character}
        description={helper.getDescription(character)}
        bgColor={bgColor}
        bgInterpolation={bgInterpolation}
      />
      <CharacterList selectCharacter={selectCharacter} />
      <SubmitButton />
    </View>
  );
};

export default Main;
