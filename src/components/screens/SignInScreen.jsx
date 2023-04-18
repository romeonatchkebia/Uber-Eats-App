import React, { useState } from "react";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import TextViewer from "../atoms/TextViewer";

const Container = styled(Screen)`
  margin-top: -80px;
`;

const UserName = styled(TextInput)``;

const Password = styled(TextInput)`
  margin-bottom: 50px;
`;

const EnterBtn = styled(Button)`
  height: 50px;
`;

function SignInScreen({ navigation, route }) {
  const [userNameSignIn, setUserNameSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [showError, setShowError] = useState(false);

  console.log(route.params.nameOfUser);
  console.log(route.params.passwordOfUser);

  function handleSignIn() {
    if (
      userNameSignIn === route.params.nameOfUser &&
      passwordSignIn === route.params.passwordOfUser
    ) {
      navigation.navigate("HomeScreen");
    } else {
      setShowError(true);
    }
  }

  return (
    <Container>
      <UserName
        placeholder="UserName"
        value={userNameSignIn}
        onChange={(e) => setUserNameSignIn(e.nativeEvent.text)}
      />
      <Password
        placeholder="Password"
        value={passwordSignIn}
        onChange={(e) => setPasswordSignIn(e.nativeEvent.text)}
      />
      <EnterBtn title="Sign In" onPress={handleSignIn} />
      {showError && (
        <TextViewer
          style={{ color: "red", marginTop: 15 }}
          text="Username or password is not correct"
          visible={true}
        />
      )}
    </Container>
  );
}

export default SignInScreen;
