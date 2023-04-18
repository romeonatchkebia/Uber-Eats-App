import React from "react";
import { Image } from "react-native";

function ImageViewer({ source, ...otherProps }) {
  return <Image source={source} {...otherProps} />;
}

export default ImageViewer;
