import Theme from "@theme/Theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
