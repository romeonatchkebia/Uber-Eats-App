import "react-native-gesture-handler";
import "react-native-get-random-values";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AuthNavigator from "./navigators/AuthNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "uber-bold": require("./assets/fonts/uber-move-2-cufonfonts/UberMoveBold.otf"),
    "uber-medium": require("./assets/fonts/uber-move-2-cufonfonts/UberMoveMedium.otf"),
    "dms-regular": require("./assets/fonts/DM_Sans/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (fontsLoaded) onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return <AuthNavigator />;
}
