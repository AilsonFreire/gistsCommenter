import Gists from "@views/gists";
import Reader from "@views/reader";
import Save from "@views/save";
import Welcome from "@views/welcome";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Router = createAppContainer(
  createStackNavigator(
    {
      Gists,
      Reader,
      Save,
      Welcome,
    },
    {
      headerLayoutPreset: "center",
      initialRouteName: "Welcome",
    }
  )
);

export default Router;
