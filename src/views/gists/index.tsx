import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationRoute } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack";

// import { Container } from './styles';
const Gists = ({ navigation }: { navigation: NavigationStackProp<NavigationRoute> }) => {
  useEffect(() => {
    console.log(navigation.getParam("id"));
  });

  return <View />;
};

Gists.navigationOptions = (): NavigationStackOptions => {
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
    headerTitle: "Gists",
    headerTitleStyle: {
      fontFamily: "SFNSDisplay-Bold",
    },
  };
};

export default Gists;
