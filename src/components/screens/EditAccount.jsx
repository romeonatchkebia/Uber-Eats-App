import React, { useState } from "react";
import { Dimensions } from "react-native";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import TextInput from "../atoms/TextInput";
import Buttons from "../atoms/Buttons";
import NewText from "../atoms/NewText";
import * as ROUTES from "../../constants/Routs";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)`
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const UserName = styled.TextInput`
  background: #eeeeee;
  border-radius: ${width * 0.038}px;
  margin-bottom: ${width * 0.025}px;
  padding: ${width * 0.05}px;
`;

const Password = styled.TextInput`
  background: #eeeeee;
  border-radius: ${width * 0.038}px;
  margin-bottom: ${width * 0.025}px;
  padding: ${width * 0.05}px;
  margin-bottom: ${width * 0.13}px;
`;

const EnterBtn = styled(Buttons)`
  height: ${width * 0.13}px;
`;

const ErrorText = styled(NewText)`
  margin-top: ${width * 0.038}px;
`;

function EditAccount({ navigation }) {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showError, setShowError] = useState(false);

  function handleConfirm() {
    if (userName !== "" && lastName !== "") {
      navigation.navigate(ROUTES.SETTINGS_SCREEN, {
        nameUser: userName,
        lastNameUser: lastName,
      });
    } else {
      setShowError(true);
    }
  }

  return (
    <Container>
      <Wrapper>
        <UserName
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.nativeEvent.text)}
        />
        <Password
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.nativeEvent.text)}
        />
        <EnterBtn title="Confirm" onPress={handleConfirm} />
        {showError && (
          <ErrorText color="red" visible={true}>
            Username or password cannot be empty
          </ErrorText>
        )}
      </Wrapper>
    </Container>
  );
}

export default EditAccount;
