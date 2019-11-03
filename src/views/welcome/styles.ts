import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

interface IStyledProps {
  theme: ITheme;
}

export const SafeArea = styled(SafeAreaView)`
  background-color: ${(props: IStyledProps) => props.theme.colors.secondaryColor};
  flex: 1;
`;

export const Contaier = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const GitImage = styled(Image)`
  align-self: center;
  height: 100;
  margin-vertical: 16;
  width: 100;
`;

export const Typography = styled(Text)`
  text-align: center;
  color: ${(props: IStyledProps) => props.theme.colors.terciaryColor};
  font-family: ${(props: IStyledProps) => props.theme.fonts.primaryFont};
  font-size: 18;
  margin-horizontal: 34;
  margin-vertical: 16;
`;

export const ButtonStart = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${(props: IStyledProps) => props.theme.colors.buttonColor};
  border-radius: 12;
  justify-content: center;
  margin-vertical: 16;
  padding-horizontal: 24;
  padding-vertical: 12;
`;

export const ButtonText = styled(Text)`
  color: ${(props: IStyledProps) => props.theme.colors.secondaryColor};
  font-family: ${(props: IStyledProps) => props.theme.fonts.primaryFont};
  font-size: 14;
`;
