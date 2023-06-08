import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

import NewText from "./NewText";

const { height } = Dimensions.get("screen");

const Container = styled.Pressable`
  align-items: center;
  background-color: black;
  padding: ${height * 0.023}px;
`;

const BigBlackGreyBtn = ({
  onPress,
  title,
  black = false,
  grey = false,
  ...props
}) => {
  return (
    <>
      {black && (
        <Container
          onPress={onPress}
          {...props}
          style={{ background: "#000000" }}
        >
          <NewText color="white" font="medium" size="medium">
            {title}
          </NewText>
        </Container>
      )}

      {grey && (
        <Container
          style={{ background: "#eeeeee" }}
          onPress={onPress}
          {...props}
        >
          <NewText font="medium" size="medium">
            {title}
          </NewText>
        </Container>
      )}
    </>
  );
};

export default BigBlackGreyBtn;
