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

function AutorizationScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  function handleConfirm() {
    if (userName !== "" && password !== "") {
      navigation.navigate("SignIn", {
        nameOfUser: userName,
        passwordOfUser: password,
      });
    } else {
      setShowError(true);
    }
  }

  return (
    <Container>
      <UserName
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.nativeEvent.text)}
      />
      <Password
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      <EnterBtn title="Confirm" onPress={handleConfirm} />
      {showError && (
        <TextViewer
          style={{ color: "red", marginTop: 15 }}
          text="Username or password cannot be empty"
          visible={true}
        />
      )}
    </Container>
  );
}

export default AutorizationScreen;
