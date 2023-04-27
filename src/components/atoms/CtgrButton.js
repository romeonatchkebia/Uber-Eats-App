import React from "react";
import styled from "styled-components";

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

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  ${({ black }) => (black ? `color : #ffffff` : `color : #000000`)};
`;

const CtgrButton = ({ title, onPress, black = false, ...props }) => {
  return (
    <Container onPress={onPress} black={black} {...props}>
      <Title black={black}>{title}</Title>
    </Container>
  );
};

export default CtgrButton;
