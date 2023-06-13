import { Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  align-items: center;
  border-radius: ${width * 0.025}px;
  justify-content: space-around;
  margin: ${width * 0.013}px;
  height: ${height * 0.235}px;
  width: ${width * 0.422}px;
`;

const Logo = styled.View`
  margin-top: ${width * 0.038}px;
`;

const TextView = styled.View`
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  border-radius: ${width * 0.13}px;
  justify-content: center;
  padding: ${width * 0.013}px ${width * 0.025}px;
`;

const Time = styled(NewText)``;

const ConvenienceStoresCard = ({ background, logo, time, onPress }) => {
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
          <Time color="white">Opens at {time} AM</Time>
        </TextView>
      ) : (
        <TextView>
          <Time color="white" numberOfLines={1}>
            Currently unavailable
          </Time>
        </TextView>
      )}
    </Container>
  );
};

export default ConvenienceStoresCard;
