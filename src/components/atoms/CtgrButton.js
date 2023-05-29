import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

import NewText from "./NewText";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled.Pressable`
  ${({ black }) => (black ? `background - color : #000000` : "")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  width: ${windowWidth / 3.5}px;
  height: ${windowHeight / 20}px;
`;

const Title = styled(NewText)`
  line-height: 20px;
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
