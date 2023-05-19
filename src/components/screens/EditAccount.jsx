import React, { useState } from "react";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import TextInput from "../atoms/TextInput";
import Buttons from "../atoms/Buttons";
import NewText from "../atoms/NewText";
import * as ROUTES from "../../constants/Routs";

const Container = styled(Screen)`
  align-items: center;
  justify-content: center;
`;

const UserName = styled(TextInput)`
  margin-bottom: 10px;
`;

const Password = styled(TextInput)`
  margin-bottom: 50px;
`;

const EnterBtn = styled(Buttons)`
  height: 50px;
`;

const ErrorText = styled(NewText)`
  margin-top: 15px;
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
    </Container>
  );
}

export default EditAccount;
