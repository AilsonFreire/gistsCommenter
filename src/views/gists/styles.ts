import { Text } from "react-native";
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
