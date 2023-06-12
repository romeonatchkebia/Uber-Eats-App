import { Dimensions, ImageBackground } from "react-native";

const { width, height } = Dimensions.get("screen");

export const SplashResize = () => {
  return (
    <ImageBackground
      source={require("../../../assets/splash.png")}
      style={{ resizeMode: "cover", width: width, height: height }}
    />
  );
};
