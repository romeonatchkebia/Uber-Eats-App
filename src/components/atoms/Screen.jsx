import React from "react";
import { Platform, Dimensions } from "react-native";
import styled from "styled-components";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const MainWrapper = styled.KeyboardAvoidingView`
  background-color: #ffffff;
  display: flex;
  height: 100%;
`;

const ImageBackground = styled.ImageBackground`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Screen = ({ children, ...props }) => {
  return (
    <MainWrapper
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...props}
    >
      <ImageBackground>
        <Container>{children}</Container>
      </ImageBackground>
    </MainWrapper>
  );
};

export default Screen;
