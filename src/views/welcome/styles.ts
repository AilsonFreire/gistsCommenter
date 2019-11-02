import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

interface IStyledProps {
  theme: ITheme;
}

export const SafeArea = styled(SafeAreaView)`
  backgroundColor: ${(props: IStyledProps) => props.theme.colors.secondaryColor};
  flex: 1;
`;
