import React, { useContext, useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationRoute } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack";
import { ThemeContext } from "styled-components";
import { ButtonStart, ButtonText, Contaier, GitImage, SafeArea, Typography } from "./styles";

const GIT_IMAGE = require("../../../assets/images/git.png");

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
      <Contaier>
        <GitImage source={GIT_IMAGE} />
        <Typography>Crie comentários nos Gists que você se interessou!</Typography>
        <ButtonStart onPress={() => navigation.navigate("Reader")}>
          <ButtonText>Começar</ButtonText>
        </ButtonStart>
      </Contaier>
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
