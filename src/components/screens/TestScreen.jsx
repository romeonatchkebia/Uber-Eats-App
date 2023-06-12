import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import { SplashResize } from "../atoms/SplashResize";

const Container = styled(Screen)``;

const TestScreen = () => {
  return (
    <Container>
      <SplashResize />
    </Container>
  );
};

export default TestScreen;
