import Theme from "@theme/Theme";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
     <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
};

export default App;
