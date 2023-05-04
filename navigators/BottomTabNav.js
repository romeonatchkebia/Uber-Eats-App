import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import * as ROUTES from "../src/constants/Routs";
import HomeScreen from "../src/components/screens/HomeScreen";
import SettingNavigator from "./SettingNavigator";
import Notifications from "../src/components/screens/Notifications";
import LandingScreen from "../src/components/screens/LandingScreen";
import Browse from "../src/components/screens/Browse";

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOMESCREEN_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
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
      <Tab.Screen
        name={ROUTES.HOMESCREEN_SCREEN}
        component={HomeScreen}
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name={ROUTES.NOTIFICATIONS_SCREEN}
        component={Notifications}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingNavigator}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
