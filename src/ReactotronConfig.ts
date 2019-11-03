import Reactotron from "reactotron-react-native";

// @ts-ignore
Reactotron.configure({ host: "192.168.100.111" })
  .useReactNative()
  .connect();
