import { ButtonStart, ButtonText, Contaier, SafeArea, Typography } from "@views/welcome/styles";
import React, { useContext, useState } from "react";
import { StatusBar } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { NavigationRoute } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack";
import { ThemeContext } from "styled-components";

const Reader = ({ navigation }: { navigation: NavigationStackProp<NavigationRoute> }) => {
  const {
    colors: { secondaryColor },
  } = useContext(ThemeContext);

  const [contentValue, contentControl] = useState(true);

  const onSuccess = async ({ data }: { data: string }) => {
    if (data.includes("https://gist.github.com/")) {
      const parts = data.split("/");
      const id = parts[parts.length - 1];
      navigation.navigate("Gists", { id });
    } else {
      contentControl(false);
    }
  };

  return (
    <SafeArea>
      <StatusBar backgroundColor={secondaryColor} barStyle="dark-content" />
      {contentValue ? (
        <>
          <Typography>Aponte o leitor para uma url de Gists válida.</Typography>
          <QRCodeScanner onRead={onSuccess} showMarker={true} checkAndroid6Permissions={true} />
        </>
      ) : (
        <Contaier>
          <Typography>Ops! Parece que a URL que você pesquisou não é válida.</Typography>
          <ButtonStart onPress={() => contentControl(true)}>
            <ButtonText>Começar</ButtonText>
          </ButtonStart>
        </Contaier>
      )}
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
