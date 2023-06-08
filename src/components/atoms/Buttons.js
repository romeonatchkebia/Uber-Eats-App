import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

import NewText from "./NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  width: ${width * 0.636}px;
  height: ${height * 0.0528}px;
  background-color: #54924f;
  border-radius: ${width * 0.038}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(NewText)``;

const Buttons = ({ title, onPress, ...props }) => {
  return (
    <Container onPress={onPress} {...props}>
      <Title color="white" size="large">
        {title}
      </Title>
    </Container>
  );
};

export default Buttons;
