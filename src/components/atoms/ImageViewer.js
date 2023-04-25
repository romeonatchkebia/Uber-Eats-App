import React from "react";
import { Image } from "react-native";

function ImageViewer({ source, onPress, ...props }) {
  return <Image source={source} onPress={onPress} {...props} />;
}

export default ImageViewer;
