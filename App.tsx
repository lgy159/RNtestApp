import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "./src/components/RegisterScreen";
import { Login } from "./src/components/LoginScreen";
import { Home } from "./src/components/HomeScreen";
import { CustomHook } from "./src/components/CustomHook";
import { TabNavigator } from "./src/components/TabNavigator";
import { StackNavigator } from "./src/components/StackNavigator";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  testTextInput: {
    height: 200,
    padding: 10,
    backgroundColor: "white",
  },
});
