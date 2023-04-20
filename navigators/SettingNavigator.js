import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ROUTES from "../src/constants/Routs";
import SettingDetails from "../src/components/screens/SettingDetails";
import Settings from "../src/components/screens/Settings";

const Stack = createNativeStackNavigator();

function SettingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAILS} component={SettingDetails} />
    </Stack.Navigator>
  );
}

export default SettingNavigator;
