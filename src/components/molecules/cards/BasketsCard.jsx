import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../../constants/Images";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

const CardImage = styled.Image``;

const TextCont = styled.View`
  width: 70%;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const Desc = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const RightArrow = styled.Image``;

const BasketsCard = ({ title, price, desc, imgUrl, ...props }) => {
  return (
    <Container {...props}>
      <CardImage source={imgUrl} />
      <TextCont>
        <Title>{title}</Title>
        <SubTitle>1 Item • US${price}</SubTitle>
        <Desc numberOfLines={2}>{desc}</Desc>
      </TextCont>
      <RightArrow source={IMAGES.RightArrow} />
    </Container>
  );
};

export default BasketsCard;
