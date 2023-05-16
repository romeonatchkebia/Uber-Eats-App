import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";

const Container = styled(Screen)``;

const Grocery = () => {
  return (
    <Container>
      <Text>Grocery</Text>
    </Container>
  );
};

export default Grocery;
