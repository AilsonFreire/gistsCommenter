import Welcome from "@views/welcome";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Router = createAppContainer(
  createStackNavigator({
    Welcome,
  }, {
    headerLayoutPreset: "center",
  })
);

export default Router;