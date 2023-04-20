import { View, Text } from "react-native";
import React from "react";

import * as ROUTES from "../../constants/Routs";
import Button from "../atoms/Button";
import styled from "styled-components";
import Screen from "../atoms/Screen";

const Container = styled(Screen)``;

const GoToDetails = styled(Button)``;

const LogOut = styled(Button)`
  margin-top: 50px;
  margin-bottom: 100px;
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
