import { saveComment } from "@services/gistsAPI/Gists";
import { GistsContent as SmallText, TextArea as Input } from "@views/gists/styles";
import { ButtonStart, ButtonText, Contaier, Typography } from "@views/welcome/styles";
import React, { useState } from "react";
import { Alert } from "react-native";
import { NavigationRoute } from "react-navigation";
import { NavigationStackOptions, NavigationStackProp } from "react-navigation-stack";

const Save = ({ navigation }: { navigation: NavigationStackProp<NavigationRoute> }) => {
  const [contentValue, screenContentControl] = useState(true);
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (text: string): void => {
    setEmai(text);
  };

  const handlePassword = (text: string): void => {
    setPassword(text);
  };

  const validateUser = async () => {
    if (email === "" || password === "") {
      Alert.alert("Preencha os campos corretamente");
    } else {
      await sendComment();
    }
  };

  const sendComment = async () => {
    const response = await saveComment(email, password, navigation.getParam("id"), navigation.getParam("comment"));
    if (response.ok) {
      screenContentControl(false);
    }
  };

  return (
    <>
      {contentValue ? (
        <>
          <Typography>Para salvar seu comentário, você precisa se autenticar*</Typography>
          <Input placeholder="Email" autoCapitalize="none" autoFocus={true} autoCorrect={false} keyboardType="email-address" onChangeText={text => handleEmail(text)} />
          <Input placeholder="Senha" autoCorrect={false} autoCapitalize="none" secureTextEntry={true} returnKeyType="go" onChangeText={text => handlePassword(text)} onSubmitEditing={() => validateUser()} />
          <Contaier>
            <ButtonStart onPress={() => validateUser()}>
              <ButtonText>Confirmar</ButtonText>
            </ButtonStart>
            <SmallText>*Não salvamos seus dados</SmallText>
          </Contaier>
        </>
      ) : (
        <Contaier>
          <Typography>Erro ao salvar seu comentário.</Typography>
          <ButtonStart
            onPress={() => {
              screenContentControl(true);
              setEmai("");
              setPassword("");
            }}
          >
            <ButtonText>Tentar Novamente</ButtonText>
          </ButtonStart>
        </Contaier>
      )}
    </>
  );
};

Save.navigationOptions = (): NavigationStackOptions => {
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
    headerTitle: "Salvar",
    headerTitleStyle: {
      fontFamily: "SFNSDisplay-Bold",
    },
  };
};

export default Save;
