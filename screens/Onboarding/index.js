import { StyleSheet } from "react-native";
import React from "react";
import { View, ImageBackground } from "react-native";

const Onboarding = () => {
  return <View style={_styles.wexNlDMF}>
        <ImageBackground source="https://crowdbotics-slack-dev.s3.amazonaws.com/media/components/screens/react-native-onboarding_NGDCqTv.png" resizeMode="contain" style={_styles.eMyZaLce}>
        </ImageBackground>
      </View>;
};

export default Onboarding;

const _styles = StyleSheet.create({
  wexNlDMF: {
    padding: 10,
    position: "relative",
    height: "100%"
  },
  eMyZaLce: {
    flex: 1,
    justifyContent: "center"
  }
});