import Gists from "@views/gists";
import Reader from "@views/reader";
import Welcome from "@views/welcome";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Router = createAppContainer(
  createStackNavigator(
    {
      Gists,
      Reader,
      Welcome,
    },
    {
      headerLayoutPreset: "center",
      initialRouteName: "Welcome",
    }
  )
);

export default Router;
