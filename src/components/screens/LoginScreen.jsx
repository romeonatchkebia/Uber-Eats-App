import react, { useState } from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import TextViewer from "../atoms/TextViewer";
import ImageViewer from "../atoms/ImageViewer";
import TextInput from "../atoms/TextInput";
import * as ROUTES from "../../constants/Routs";

const loginScreenImage = require("../Images/loginScreenImage.png");

const Container = styled(Screen)`
  margin-top: -30px;
`;

const LogIn = styled(Button)`
  margin-bottom: 10px;
`;

const ForgotPass = styled(Button)`
  background-color: #ffffff;
  margin-top: 70px;
`;
const CreateAccount = styled(Button)`
  background-color: #ffffff;
  margin-top: 20px;
  margin-bottom: -50px;
`;

const LoginScreImage = styled(ImageViewer)`
  margin-top: 40px;
  margin-bottom: 54px;
`;

const UserName = styled(TextInput)``;

const Password = styled(TextInput)``;

const LoginScreen = ({ navigation, route }) => {
  const [userNameLogIn, setUserNameLogIn] = useState("");
  const [passwordLogIn, setPasswordLogIn] = useState("");
  const [showError, setShowError] = useState(false);

  // function handleLogIn() {
  //   if (!route.params) {
  //     setShowError(true);
  //   } else if (
  //     userNameLogIn === route.params.nameOfUser &&
  //     passwordLogIn === route.params.passwordOfUser
  //   ) {
  //     navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
  //     setShowError(false);
  //     setUserNameLogIn("");
  //     setPasswordLogIn("");
  //   } else {
  //     setShowError(true);
  //   }
  // }

  return (
    <Container>
      <LoginScreImage source={loginScreenImage} />
      <UserName
        placeholder="UserName"
        value={userNameLogIn}
        onChange={(e) => setUserNameLogIn(e.nativeEvent.text)}
      />
      <Password
        placeholder="Password"
        value={passwordLogIn}
        onChange={(e) => setPasswordLogIn(e.nativeEvent.text)}
      />
      <LogIn
        title="Log In"
        onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
      />
      {showError && (
        <TextViewer
          style={{ color: "red", marginTop: 15 }}
          text="Username or password is not correct"
        />
      )}
      <ForgotPass title="Forgot Password?" black />
      <CreateAccount
        title="Create New Account"
        onPress={() => {
          navigation.navigate(ROUTES.CREATENEWACCOUNT_SCREEN);
          setShowError(false);
          setUserNameLogIn("");
          setPasswordLogIn("");
        }}
        black
      />
    </Container>
  );
};

export default LoginScreen;
