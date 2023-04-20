import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ROUTES from "../src/constants/Routs";

import LoginScreen from "../src/components/screens/LoginScreen";
import CreateNewAccount from "../src/components/screens/CreateNewAccount";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import BottomTabNav from "./BottomTabNav";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.LOGIN_SCREEN}
          component={LoginScreen}
          options={{ title: "Log In", headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CREATENEWACCOUNT_SCREEN}
          component={CreateNewAccount}
          options={{ title: "Authorization", headerShown: true }}
        />
        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD_SCREEN}
          component={ForgotPassword}
          options={{ title: "Forgot Password", headerShown: true }}
        />
        <Stack.Screen
          name={ROUTES.BOTTOM_TAB_NAV}
          component={BottomTabNav}
          options={{ title: "Home", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
