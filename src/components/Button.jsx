import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Main = () => {
  return (
    <View>
      <Instruction>{/* progress */}</Instruction>
      <SelectedCharacter></SelectedCharacter>
      <CharacterList></CharacterList>
      <Button></Button>
    </View>
  );
};

export default Main;
