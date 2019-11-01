import React, { useEffect } from "react";
import { BackHandler, StatusBar } from "react-native";
// @ts-ignore
import OAuthManager from "react-native-oauth";
import { CLIENT_ID, CLIENT_SECRET } from "utils/Constants";

const App = () => {

  useEffect(() => {

    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    const manager = new OAuthManager("Comment");
    manager.configure({
      github: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }
    });

    manager.authorize("github", { scopes: "gist" })
      .then(resp => console.log("Your users ID", resp))
      .catch(err => console.log("There was an error"));

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
