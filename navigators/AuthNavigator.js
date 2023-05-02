import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ROUTES from "../src/constants/Routs";
import { Host } from "react-native-portalize";

import LoginScreen from "../src/components/screens/LoginScreen";
import CreateNewAccount from "../src/components/screens/CreateNewAccount";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../src/components/screens/RestaurantDetails";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ROUTES.LOGIN_SCREEN}
            component={LoginScreen}
            options={{ title: "Log In" }}
          />
          <Stack.Screen
            name={ROUTES.CREATENEWACCOUNT_SCREEN}
            component={CreateNewAccount}
            options={{ title: "Authorization" }}
          />
          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPassword}
            options={{ title: "Forgot Password" }}
          />
          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name={ROUTES.RESTAURANT_DETAILS_SCREEN}
            component={RestaurantDetails}
            options={{ title: "Restaurant" }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}

export default AuthNavigator;
