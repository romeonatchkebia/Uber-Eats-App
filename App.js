import "react-native-gesture-handler";
import "react-native-get-random-values";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import AuthNavigator from "./navigators/AuthNavigator";
import FontContext from "./src/components/atoms/FontContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    "uber-bold": require("./assets/fonts/uber-move-2-cufonfonts/UberMoveBold.otf"),
    "uber-medium": require("./assets/fonts/uber-move-2-cufonfonts/UberMoveMedium.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <FontContext.Provider value={{ fontFamily: "uber-bold" }}>
      <AuthNavigator />
    </FontContext.Provider>
  );
}
