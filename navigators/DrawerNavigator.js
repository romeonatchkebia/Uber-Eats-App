import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import * as ROUTES from "../src/constants/Routs";
import * as COLORS from "../src/constants/Colors";

import Orders from "../src/components/screens/Orders";
import Notifications from "../src/components/screens/Notifications";
import SettingNavigator from "./SettingNavigator";
import BottomTabNav from "./BottomTabNav";
import CustomDrawer from "../src/components/organisms/CustomDrawer";
import LandingScreen from "../src/components/screens/LandingScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.BOTTOM_TAB_NAV) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.ORDERS_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS_SCREEN) {
            icon = focused ? "notifications" : "notifications-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.LANDING_SCREEN) {
            icon = focused ? "map" : "map-outline";
          }
          return <Icon name={icon} size={25} color={color} />;
        },
      })}
    >
      <Drawer.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        component={BottomTabNav}
        options={{ title: "Home", headerShown: false }}
      />
      <Drawer.Screen name={ROUTES.ORDERS_SCREEN} component={Orders} />

      <Drawer.Screen
        name={ROUTES.LANDING_SCREEN}
        component={LandingScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_SCREEN}
        component={Notifications}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingNavigator}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
