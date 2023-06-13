import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: ${width * 0.025}px 0;
  width: 100%;
`;

const CardImage = styled.Image`
  width: ${width * 0.18}px;
  height: ${height * 0.082}px;
`;

const TextCont = styled.View`
  width: 70%;
`;

const Title = styled(NewText)``;

const SubTitle = styled(NewText)``;

const Desc = styled(NewText)``;

const ConvenienceCard = ({ title, price, desc, imgUrl, time, ...props }) => {
  return (
    <Container {...props}>
      <CardImage source={imgUrl} />

      <TextCont>
        <Title size="medium" font="medium">
          {title}
        </Title>

        <SubTitle color="grey">Opens at{time}</SubTitle>

        <Desc numberOfLines={2} color="green">
          {desc}
        </Desc>
      </TextCont>

      <MaterialCommunityIcons
        name="heart-outline"
        size={width >= 350 ? 26 : 18}
        color="black"
      />
    </Container>
  );
};

export default ConvenienceCard;
