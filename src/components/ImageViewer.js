import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

const ImageOf = styled(Image)`
  margin-top: 40px;
  margin-bottom: 54px;
`;

function ImageViewer({ loginScreenImage }) {
  return <ImageOf source={loginScreenImage} />;
}

export default ImageViewer;
