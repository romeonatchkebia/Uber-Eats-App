import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

import NewText from "./NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  ${({ black }) => (black ? `background - color : #000000` : "")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${height >= 700 ? `${height * 0.01}px` : `${height * 0.01}px`};
  width: ${width * 0.3}px;
  height: ${height * 0.06}px;
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
