import React from "react";

import * as ROUTES from "../../constants/Routs";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import Buttons from "../atoms/Buttons";

const Container = styled(Screen)`
  align-items: center;
  justify-content: center;
`;

const GoToDetails = styled(Buttons)`
  margin-top: -50%;
`;

const LogOut = styled(Buttons)`
  margin-top: 10%;
`;

const Settings = ({ navigation }) => {
  return (
    <Container>
      <GoToDetails
        title="Go To Details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      />
      <LogOut
        title="Log Out"
        onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)}
      />
    </Container>
  );
};

export default Settings;
