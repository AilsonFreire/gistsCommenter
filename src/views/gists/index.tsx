import { getGists } from "@services/gistsAPI/Gists";
import { ButtonStart, ButtonText, Contaier, SafeArea, Typography } from "@views/welcome/styles";
import React, { useContext, useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { NavigationRoute, ScrollView } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack";
import { ThemeContext } from "styled-components";
import { GistsContent, TextArea } from "./styles";

const Gists = ({ navigation }: { navigation: NavigationStackProp<NavigationRoute> }) => {
  const {
    colors: { secondaryColor },
  } = useContext(ThemeContext);

  const [contentValue, screenContentControl] = useState(true);
  const [gistsContent, setGistContet] = useState("");
  const [comment, setComment] = useState("");

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
        // @ts-ignore
        setGistContet(files[key].content);
      }
    }
    // tslint:disable-next-line: no-floating-promises
    fetchGits();
  }, []);

  const validateComment = (text: string): void => {
    if (text !== "") {
      setComment(text);
    }
  };

  const submitComment = (): void => {
    if (comment !== "") {
      navigation.navigate("Save", { comment, id: navigation.getParam("id") });
    } else {
      Alert.alert("Comentário não pode ser vazio");
    }
  };

  return (
    <SafeArea>
      <StatusBar backgroundColor={secondaryColor} barStyle="dark-content" />
      {contentValue ? (
        <ScrollView style={{ flex: 1 }}>
          <Typography>Conteúdo</Typography>
          <GistsContent>{gistsContent === "" ? "Carregando..." : gistsContent}</GistsContent>
          <TextArea autoCorrect={false} returnKeyType={"go"} placeholder={"Digite seu comentário"} autoFocus={true} onChangeText={text => validateComment(text)} autoCapitalize="none" multiline={true} onSubmitEditing={() => submitComment()} />
          <Contaier>
            <ButtonStart onPress={() => submitComment()}>
              <ButtonText>Próximo</ButtonText>
            </ButtonStart>
          </Contaier>
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
