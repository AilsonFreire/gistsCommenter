import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";

interface IStyledProps {
  theme: ITheme;
}

export const SafeArea = styled(SafeAreaView)`
  background-color: ${(props: IStyledProps) => props.theme.colors.secondaryColor};
  flex: 1;
`;

export const Typography = styled(Text)`
  text-align: center;
  color: ${(props: IStyledProps) => props.theme.colors.terciaryColor};
  font-family: ${(props: IStyledProps) => props.theme.fonts.primaryFont};
  font-size: 18;
  margin-horizontal: 34;
  margin-vertical: 16;
`;
