import { Text } from "react-native";
import React from "react";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";

const Container = styled(Screen)``;

const Grocery = () => {
  return (
    <Container>
      <NewText>Grocery</NewText>
    </Container>
  );
};

export default Grocery;
