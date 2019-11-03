// import { SafeArea } from "./styles";
import { SafeArea, Typography } from "@views/welcome/styles";
import React, { useContext } from "react";
import { StatusBar, View } from "react-native";
import { NavigationStackOptions } from "react-navigation-stack";
import { ThemeContext } from "styled-components";

import QRCodeScanner from "react-native-qrcode-scanner";

const Reader = () => {
  const {
    colors: { secondaryColor },
  } = useContext(ThemeContext);

  const onSuccess = async (e: any) => {
    console.log(e.data);
  };

  return (
    <SafeArea>
      <StatusBar backgroundColor={secondaryColor} barStyle="dark-content" />
      <Typography>Aponte o leitor para uma url de Gists válida.</Typography>

      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        checkAndroid6Permissions={true}
        //  bottomContent={
        //   <View style={styles.touchable}>
        //    {this.state.success && (
        //     <Text style={styles.text}>OK. Got it!</Text>
        //    )}
        //  }
      />
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
