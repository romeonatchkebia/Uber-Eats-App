import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../atoms/NewText";

const Container = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Orders = () => {
  return (
    <Container>
      <NewText font="bold" size="medium">
        No recent orders
      </NewText>

      <NewText size="medium" color="grey">
        Your recent orders appear here.
      </NewText>
    </Container>
  );
};

export default Orders;
