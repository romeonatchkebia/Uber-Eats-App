import React, { useState } from "react";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import ImageViewer from "../atoms/ImageViewer";
import TextInput from "../atoms/TextInput";
import * as ROUTES from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Buttons from "../atoms/Buttons";

const Container = styled(Screen)`
  align-items: center;
`;

const LogIn = styled(Buttons)`
  margin-bottom: 10px;
`;

const ForgotPass = styled(Buttons)`
  background-color: #ffffff;
  margin-top: 70px;
`;
const CreateAccount = styled(Buttons)`
  background-color: #ffffff;
  margin-top: 20px;
  margin-bottom: -50px;
`;

const LoginScreImage = styled(ImageViewer)`
  margin-top: 100px;
  margin-bottom: 54px;
`;

const UserName = styled(TextInput)`
  margin-bottom: 10px;
`;

const Password = styled(TextInput)`
  margin-bottom: 20px;
`;

const LoginScreen = ({ navigation }) => {
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
      <LoginScreImage source={IMAGES.LOGINSCREENIMAGE} />
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
        <NewText color="red" style={{ marginTop: 15 }}>
          Username or password is not correct
        </NewText>
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
