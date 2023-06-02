import React from "react";
import { Platform, Dimensions, StatusBar } from "react-native";
import styled from "styled-components";

const { height, width } = Dimensions.get("screen");

const StatusBarHeight = StatusBar.currentHeight;

const MainWrapper = styled.KeyboardAvoidingView`
  background-color: #ffffff;
  display: flex;
  height: 100%;
`;

const ImageBackground = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? 0 : StatusBarHeight}px;
`;

const Screen = ({ children, ...props }) => {
  return (
    <MainWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground>
        <Container {...props}>{children}</Container>
      </ImageBackground>
    </MainWrapper>
  );
};

export default Screen;
