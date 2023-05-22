import React from "react";
import styled from "styled-components";

import NewText from "./NewText";

const Container = styled.Pressable`
  width: 250px;
  height: 45px;
  background-color: #54924f;
  border-radius: 15px;
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
