import React from "react";
import styled from "styled-components";

import NewText from "./NewText";

const Container = styled.Pressable`
  width: 98px;
  height: 38px;
  ${({ black }) => (black ? `background - color : #000000` : "")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
`;

const Title = styled(NewText)`
  line-height: 20px;
  ${({ black }) => (black ? `color : #ffffff` : `color : #000000`)};
`;

const CtgrButton = ({ title, onPress, black = false, ...props }) => {
  return (
    <Container onPress={onPress} black={black} {...props}>
      <Title font="medium" black={black} onPress={onPress}>
        {title}
      </Title>
    </Container>
  );
};

export default CtgrButton;
