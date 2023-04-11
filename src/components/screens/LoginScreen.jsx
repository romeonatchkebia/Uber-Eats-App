import react from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import TextViewer from "../atoms/TextViewer";
import ImageViewer from "../ImageViewer";

const loginScreenImage = require("../Images/loginScreenImage.png");

const Container = styled(Screen)``;

const LoginScreen = () => {
  return (
    <Container>
      <Button title="Sign in with email" light style={{ height: "52px" }} />
      <TextViewer text="Sign in with google" />
      <ImageViewer loginScreenImage={loginScreenImage} />
      <Button title="Get Started" onPress={() => console.log("Hi")} />
      <Button title="Skip" />
    </Container>
  );
};

export default LoginScreen;
