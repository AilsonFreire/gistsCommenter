import { getGists } from "@services/gistsAPI/Gists";
import { ButtonStart, ButtonText, Contaier, SafeArea, Typography } from "@views/welcome/styles";
import React, { useContext, useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { NavigationRoute, ScrollView } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack";
import { ThemeContext } from "styled-components";
import { GistsContent } from "./styles";

const Gists = ({ navigation }: { navigation: NavigationStackProp<NavigationRoute> }) => {
  const {
    colors: { secondaryColor },
  } = useContext(ThemeContext);

  const [contentValue, screenContentControl] = useState(true);
  const [gistsContent, setGistContet] = useState("");

  useEffect(() => {
    async function fetchGits() {
      const response = await getGists(navigation.getParam("id"));
      if (!response.ok) {
        screenContentControl(false);
      } else {
        const {
          data: { files },
        } = response;

        const key = Object.keys(files);
        setGistContet(files[key].content);
      }
    }
    // tslint:disable-next-line: no-floating-promises
    fetchGits();
  }, []);

  return (
    <SafeArea>
      <StatusBar backgroundColor={secondaryColor} barStyle="dark-content" />
      {contentValue ? (
        <ScrollView style={{ flex: 1 }}>
          <GistsContent>{gistsContent}</GistsContent>
        </ScrollView>
      ) : (
        <Contaier>
          <Typography>Ops! Não foi possível acessar esse Gits.</Typography>
          <ButtonStart
            onPress={() => {
              navigation.navigate("Welcome");
              screenContentControl(true);
            }}
          >
            <ButtonText>Tentar Novamente</ButtonText>
          </ButtonStart>
        </Contaier>
      )}
    </SafeArea>
  );
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
