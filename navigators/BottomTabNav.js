import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import * as ROUTES from "../src/constants/Routs";
import HomeScreen from "../src/components/screens/HomeScreen";
import Account from "../src/components/screens/Account";
import Browse from "../src/components/screens/Browse";
import Grocery from "../src/components/screens/Grocery.jsx";
import Baskets from "../src/components/screens/Baskets";

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
            icon = focused ? "search-circle" : "search-circle-outline";
          } else if (route.name === ROUTES.GROCERY_SCREEN) {
            icon = focused ? "basket" : "basket-outline";
          } else if (route.name === ROUTES.ACCOUNT_SCREEN) {
            icon = focused ? "person" : "person-outline";
          } else if (route.name === ROUTES.LANDING_SCREEN) {
            icon = focused ? "map" : "map-outline";
          } else if (route.name === ROUTES.BASKETS_SCREEN) {
            icon = focused ? "cart" : "cart-outline";
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
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.BASKETS_SCREEN}
        component={Baskets}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.ACCOUNT_SCREEN}
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
