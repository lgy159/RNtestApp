import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useRef, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Register } from "./src/components/RegisterScreen";
import { Login } from "./src/components/LoginScreen";
import { Home } from "./src/components/HomeScreen";
import { CustomHook } from "./src/components/CustomHook";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Start Screen" }}
        />
        <Stack.Screen name="CustomHook" component={CustomHook} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
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
