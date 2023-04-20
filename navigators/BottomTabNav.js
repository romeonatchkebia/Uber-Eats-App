import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as ROUTES from "../src/constants/Routs";
import HomeScreen from "../src/components/screens/HomeScreen";
import Orders from "../src/components/screens/Orders";
import Shop from "../src/components/screens/Shop";
import Settings from "../src/components/screens/Settings";
import SettingNavigator from "./SettingNavigator";

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOMESCREEN_SCREEN} component={HomeScreen} />
      <Tab.Screen name={ROUTES.ORDERS_SCREEN} component={Orders} />
      <Tab.Screen name={ROUTES.SHOP_SCREEN} component={Shop} />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingNavigator}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
