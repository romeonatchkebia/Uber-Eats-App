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
import Deals from "../src/components/screens/Deals";
import Baskets from "../src/components/screens/Baskets";
import SettingNavigator from "./SettingNavigator";
import EditAccount from "../src/components/screens/EditAccount";
import OrderSelection from "../src/components/screens/OrderSelection";
import DeliveryDetails from "../src/components/screens/DeliveryDetails";
import TrackOrder from "../src/components/screens/TrackOrder";
import Delivered from "../src/components/screens/Delivered";
import BottomTabNav from "./BottomTabNav";
import ItemDetails from "../src/components/screens/ItemDetails";
import Featured from "../src/components/screens/Featured";
import Categories from "../src/components/screens/Categories";
import PastOrders from "../src/components/screens/PastOrders";
import Note from "../src/components/screens/Note";
import OrderDetail from "../src/components/screens/OrderDetail";
import PhoneInput from "../src/components/screens/PhoneInput";
import PassInput from "../src/components/screens/PassInput";
import PhoneVerification from "../src/components/screens/PhoneVerification";
import EmailVerification from "../src/components/screens/EmailVerification";
import Welcome from "../src/components/screens/Welcome";
import LandingScreen from "../src/components/screens/LandingScreen";
import TestScreen from "../src/components/screens/TestScreen";
import Filters from "../src/components/screens/Filters";
import Convenience from "../src/components/screens/Convenience";
import ChangeAddress from "../src/components/screens/ChangeAddress";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ROUTES.LANDING_SCREEN}
            component={LandingScreen}
            options={{ title: "Landing" }}
          />
          <Stack.Screen
            name={ROUTES.PHONE_INPUT_SCREEN}
            component={PhoneInput}
            options={{ title: "Phone Input" }}
          />
          <Stack.Screen
            name={ROUTES.PASSWORD_INPUT_SCREEN}
            component={PassInput}
            options={{ title: "Password Input" }}
          />
          <Stack.Screen
            name={ROUTES.PHONE_VERIFICATION_SCREEN}
            component={PhoneVerification}
            options={{ title: "PHone Verification" }}
          />
          <Stack.Screen
            name={ROUTES.EMAIL_VERIFICATION_SCREEN}
            component={EmailVerification}
            options={{ title: "Email Verification" }}
          />
          <Stack.Screen
            name={ROUTES.WELCOME_SCREEN}
            component={Welcome}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name={ROUTES.BOTTOM_TAB_NAV}
            component={BottomTabNav}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.SETTINGS_NAVIGATOR}
            component={SettingNavigator}
            options={{ title: "Settings" }}
          />

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
            name={ROUTES.ITEM_DETAILS_SCREEN}
            component={ItemDetails}
            options={{ title: "ItemDetails" }}
          />
          <Stack.Screen
            name={ROUTES.NOTE_SCREEN}
            component={Note}
            options={{ title: "Note" }}
          />
          <Stack.Screen
            name={ROUTES.FEATURED_SCREEN}
            component={Featured}
            options={{ title: "Featured" }}
          />
          <Stack.Screen
            name={ROUTES.CATEGORIES_SCREEN}
            component={Categories}
            options={{ title: "Categories" }}
          />
          <Stack.Screen
            name={ROUTES.ORDERS_SCREEN}
            component={PastOrders}
            options={{ title: "PastOrders" }}
          />
          <Stack.Screen
            name={ROUTES.ORDER_DETAIlS_SCREEN}
            component={OrderDetail}
            options={{ title: "OrderDetail" }}
          />
          <Stack.Screen
            name={ROUTES.EDITACCOUNT_SCREEN}
            component={EditAccount}
            options={{ title: "Edit Account" }}
          />
          <Stack.Screen
            name={ROUTES.TEST_SCREEN}
            component={TestScreen}
            options={{ title: "Test" }}
          />
          <Stack.Screen
            name={ROUTES.FILTERS_SCREEN}
            component={Filters}
            options={{ title: "Filters" }}
          />
          <Stack.Screen
            name={ROUTES.CONVENIENCE_SCREEN}
            component={Convenience}
            options={{ title: "Convenience" }}
          />
          <Stack.Screen
            name={ROUTES.CHANGEADDRESS_SCREEN}
            component={ChangeAddress}
            options={{ title: "ChangeAddress" }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}

export default MainNavigator;
