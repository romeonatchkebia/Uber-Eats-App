import "react-native-gesture-handler";
import "react-native-get-random-values";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import AuthNavigator from "./navigators/AuthNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "uber-bold": require("./assets/fonts/uber-move-text-cdnfonts/UberMoveTextBold.otf"),
    "uber-medium": require("./assets/fonts/uber-move-text-cdnfonts/UberMoveTextMedium.otf"),
    "uber-regular": require("./assets/fonts/uber-move-text-cdnfonts/UberMoveTextRegular.otf"),
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
