import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CustomHook } from "./CustomHook";
import Login from "./LoginScreen";
import { Register } from "./RegisterScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        // focused: bool, 클릭했는지 여부
        switch (route.name) {
          case "Search":
            iconName = "magnify";
            break;
          case "Community":
            iconName = "forum-outline";
            break;
          case "News":
            iconName = "view-dashboard-outline";
            break;
          case "Myinfo":
            iconName = "account-circle-outline";
            break;
          default:
            iconName = "star-outline";
        }
        return (
          <MaterialCommunityIcons size={size} name={iconName} color={color} />
        );
      },
      // 2개 이상의 네비게이터를 사용할 땐 설정 필수
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen name="CustomHook" component={CustomHook} />
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Register" component={Register} />
  </Tab.Navigator>
);
