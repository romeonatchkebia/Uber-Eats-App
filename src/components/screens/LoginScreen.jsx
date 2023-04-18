import react from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import TextViewer from "../atoms/TextViewer";
import ImageViewer from "../atoms/ImageViewer";

const loginScreenImage = require("../Images/loginScreenImage.png");

const Container = styled(Screen)``;

const SignInBtn = styled(Button)`
  height: 52px;
`;
const GetStartedBtn = styled(Button)`
  margin-bottom: 23px;
`;

const SignGoogle = styled(TextViewer)`
  margin-top: 38px;
`;

const LoginScreImage = styled(ImageViewer)`
  margin-top: 40px;
  margin-bottom: 54px;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <SignInBtn title="Sign in with email" light />
      <SignGoogle text="Sign in with google" visible={true} />
      <LoginScreImage source={loginScreenImage} />
      <GetStartedBtn
        title="Get Started"
        onPress={() => navigation.navigate("Authorization")}
      />
      <Button title="Skip" />
    </Container>
  );
};

export default LoginScreen;
