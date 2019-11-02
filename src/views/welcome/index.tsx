import React, { useContext, useEffect } from "react";
import { StatusBar, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationRoute } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack";
import { ThemeContext } from "styled-components";
import { SafeArea } from "./styles";

const Welcome = ({ navigation }: { navigation: NavigationStackProp<NavigationRoute> }) => {
  const {
    colors: { secondaryColor },
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

Welcome.navigationOptions = (): NavigationStackOptions => {
  return {
    // @ts-ignore
    headerStyle: {
      elevation: 0,
      shadowOffset: {
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    headerTitle: "Bem-vindo",
    headerTitleStyle: {
      fontFamily: "SFNSDisplay-Bold",
    },
  };
};

export default Welcome;
