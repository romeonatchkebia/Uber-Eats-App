import React from "react";
import { Text } from "react-native";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import TextViewer from "../atoms/TextViewer";

const Conatiner = styled(Screen)`
  margin-top: -80px;
`;

function HomeScreen() {
  return (
    <Conatiner>
      <TextViewer
        text="You Sign In Successfully"
        visible={true}
        style={{ fontSize: 30 }}
      />
    </Conatiner>
  );
}

export default HomeScreen;
