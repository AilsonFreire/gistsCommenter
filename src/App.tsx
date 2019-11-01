import React, { useEffect } from "react";
import { BackHandler, StatusBar } from "react-native";
// @ts-ignore
import { CLIENT_ID, CLIENT_SECRET } from "utils/Constants";

const App = () => {

  useEffect(() => {

    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return function cleanup() {
      backHandler.remove();
    };
  });

  const handleBackPress = () => {
    return true;
  };

  return (
    <StatusBar barStyle="dark-content" />
  );
};

export default App;
