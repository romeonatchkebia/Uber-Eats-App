import { Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled.Pressable`
  align-items: center;
  justify-content: space-around;
  margin: 5px;
  height: ${windowHeight / 5.5}px;
  width: ${windowWidth / 2.2}px;
`;

const Logo = styled.View`
  margin-top: 15px;
`;

const TextView = styled.View`
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 50px;
  justify-content: center;
  padding: 5px 10px;
`;

const Time = styled(NewText)``;

const GroceryCard = ({ background, logo, time, onPress }) => {
  return (
    <Container
      onPress={onPress}
      style={{
        backgroundColor: background,
      }}
    >
      <Logo>
        <Image source={logo} />
      </Logo>

      {time ? (
        <TextView>
          <Time color="white">In {time} minutes</Time>
        </TextView>
      ) : (
        <TextView>
          <Time color="white">Currently unavailable</Time>
        </TextView>
      )}
    </Container>
  );
};

export default GroceryCard;
