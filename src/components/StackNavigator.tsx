import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import { Home } from "./HomeScreen";
import { CustomHook } from "./CustomHook";
import Login from "./LoginScreen";
import { Register } from "./RegisterScreen";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="testApp" component={TabNavigator} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Start Screen", headerShown: false }}
      />
      <Stack.Screen
        name="CustomHook"
        component={CustomHook}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
