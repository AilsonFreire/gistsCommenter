import React, { useContext, useEffect } from "react";
import { StatusBar, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { ThemeContext } from "styled-components";
import { SafeArea } from "./styles";

const Welcome = () => {
  const {
    colors: { secondaryColor }
  } = useContext(ThemeContext);
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeArea>
      <StatusBar backgroundColor={secondaryColor} barStyle="dark-content" />
    </SafeArea>
  );
};

export default Welcome;
