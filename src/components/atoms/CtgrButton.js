import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

import NewText from "./NewText";

const { height } = Dimensions.get("screen");

const Container = styled.Pressable`
  ${({ black }) => (black ? `background - color : #000000` : "")};
  align-items: center;
  border-radius: ${height * 0.0293}px;
  justify-content: center;
  height: ${height * 0.05}px;
  width: 30%;
`;

const Title = styled(NewText)`
  ${({ black }) => (black ? `color : #ffffff` : `color : #000000`)};
`;

const CtgrButton = ({ title, onPress, black = false, ...props }) => {
  return (
    <Container onPress={onPress} black={black} {...props}>
      <Title font="medium" black={black}>
        {title}
      </Title>
    </Container>
  );
};

export default CtgrButton;
