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
  margin-bottom: 23px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#55837D" : "#FFFFFF")};
  font-size: 16px;
`;

const Button = ({ title, onPress, light = false }) => {
  return (
    <Container onPress={onPress} light={light}>
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default Button;
