import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../src/components/screens/LoginScreen";
import AutorizationScreen from "../src/components/screens/AutorizationScreen";
import SignInScreen from "../src/components/screens/SignInScreen";
import HomeScreen from "../src/components/screens/HomeScreen";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Log In", headerShown: false }}
        />
        <Stack.Screen
          name="Authorization"
          component={AutorizationScreen}
          options={{ title: "Authorization", headerShown: true }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign In", headerShown: true }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
