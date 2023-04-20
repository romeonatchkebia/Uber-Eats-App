import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 250px;
  height: 45px;
  background-color: #54924f;
  background-color: ${({ light }) => (light ? "#C7DAC5" : "#54924f")};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${({ light, black }) => {
    if (light) {
      return "#55837d";
    } else if (black) {
      return "#000000";
    } else {
      return "#ffffff";
    }
  }};
`;

const Button = ({ title, onPress, light = false, black = false, ...props }) => {
  return (
    <Container onPress={onPress} light={light} {...props}>
      <Title light={light} black={black}>
        {title}
      </Title>
    </Container>
  );
};

export default Button;
