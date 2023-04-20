import React from "react";
import { Text } from "react-native";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import TextViewer from "../atoms/TextViewer";

const Conatiner = styled(Screen)``;

const WelcomeText = styled(TextViewer)`
  margin-bottom: 200px;
`;

function HomeScreen() {
  return (
    <Conatiner>
      <WelcomeText
        text="You Sign In Successfully"
        visible={true}
        style={{ fontSize: 30 }}
      />
    </Conatiner>
  );
}

export default HomeScreen;
