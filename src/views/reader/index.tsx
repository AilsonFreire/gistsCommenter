import React, { useContext } from "react";
import { StatusBar, View } from "react-native";
import { NavigationStackOptions } from "react-navigation-stack";
import { ThemeContext } from "styled-components";
// import { SafeArea } from "./styles";
import { Typography, SafeArea } from "@views/welcome/styles";

const Reader = () => {
  const {
    colors: { secondaryColor },
  } = useContext(ThemeContext);

  return (
    <SafeArea>
      <StatusBar backgroundColor={secondaryColor} barStyle="dark-content" />
      <Typography>Aponte o leitor para uma url de Gists válida.</Typography>
    </SafeArea>
  );
};

Reader.navigationOptions = (): NavigationStackOptions => {
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
    headerTitle: "Leitor",
    headerTitleStyle: {
      fontFamily: "SFNSDisplay-Bold",
    },
  };
};

export default Reader;
