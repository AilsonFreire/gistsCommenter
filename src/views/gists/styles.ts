import { Text, TextInput } from "react-native";
import styled from "styled-components/native";

interface IStyledProps {
  theme: ITheme;
}

export const GistsContent = styled(Text)`
  color: ${(props: IStyledProps) => props.theme.colors.terciaryColor};
  font-family: ${(props: IStyledProps) => props.theme.fonts.primaryFont};
  font-size: 12;
  margin-horizontal: 16;
  margin-vertical: 16;
`;

export const TextArea = styled(TextInput)`
  background-color: #f6f8fa;
  border-color: #d1d5da;
  border-width: 1;
  border-radius: 10;
  margin-horizontal: 16;
  margin-vertical: 16;
`;
