import React from "react";
import { Image } from "react-native";

function ImageViewer({ source, ...props }) {
  return <Image source={source} {...props} />;
}

export default ImageViewer;
