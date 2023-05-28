import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ROUTES from "../src/constants/Routs";
import { Host } from "react-native-portalize";

import LoginScreen from "../src/components/screens/LoginScreen";
import CreateNewAccount from "../src/components/screens/CreateNewAccount";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../src/components/screens/RestaurantDetails";
import Deals from "../src/components/screens/Deals";
import Baskets from "../src/components/screens/Baskets";
import SettingNavigator from "./SettingNavigator";
import EditAccount from "../src/components/screens/EditAccount";
import OrderSelection from "../src/components/screens/OrderSelection";
import DeliveryDetails from "../src/components/screens/DeliveryDetails";
import TrackOrder from "../src/components/screens/TrackOrder";
import Delivered from "../src/components/screens/Delivered";

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
          <Stack.Screen
            name={ROUTES.ORDER_SELECTION_SCREEN}
            component={OrderSelection}
            options={{ title: "Order Selection" }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERY_DETAILS_SCREEN}
            component={DeliveryDetails}
            options={{ title: "Delivery Details" }}
          />
          <Stack.Screen
            name={ROUTES.TRACK_ORDER_SCREEN}
            component={TrackOrder}
            options={{ title: "Track Order" }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERED_SCREEN}
            component={Delivered}
            options={{ title: "Delivered" }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{ title: "Deals" }}
          />
          <Stack.Screen
            name={ROUTES.BASKETS_SCREEN}
            component={Baskets}
            options={{ title: "Baskets" }}
          />
          <Stack.Screen
            name={ROUTES.EDITACCOUNT_SCREEN}
            component={EditAccount}
            options={{ title: "Edit Account" }}
          />

          <Stack.Screen
            name={ROUTES.SETTINGS_NAVIGATOR}
            component={SettingNavigator}
            options={{ title: "Baskets" }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}

export default AuthNavigator;
