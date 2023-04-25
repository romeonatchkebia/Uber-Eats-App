import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import * as ROUTES from "../src/constants/Routs";
import HomeScreen from "../src/components/screens/HomeScreen";
import Orders from "../src/components/screens/Orders";
import SettingNavigator from "./SettingNavigator";
import Notifications from "../src/components/screens/Notifications";

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
          } else if (route.name === ROUTES.ORDERS_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS_SCREEN) {
            icon = focused ? "notifications" : "notifications-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "settings" : "settings-outline";
          }
          return <Icon name={icon} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOMESCREEN_SCREEN}
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen name={ROUTES.ORDERS_SCREEN} component={Orders} />
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