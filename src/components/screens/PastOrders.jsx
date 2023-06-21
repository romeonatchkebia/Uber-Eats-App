import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import CtgrButton from "../atoms/CtgrButton";

const { height, width } = Dimensions.get("screen");

const Container = styled.View``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const CtgrView = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: ${width * 0.05}px 0;
`;

const TextView = styled.View`
  align-items: center;
  justify-content: center;
  gap: ${width * 0.025}px;
  margin-top: ${height * 0.18}px;
`;

const PastOrders = () => {
  return (
    <Container>
      <Wrapper>
        <TextView>
          <NewText font="bold" size="medium">
            No recent orders
          </NewText>

          <NewText size="medium" color="grey">
            Your recent orders appear here.
          </NewText>
        </TextView>
      </Wrapper>
    </Container>
  );
};

export default PastOrders;
