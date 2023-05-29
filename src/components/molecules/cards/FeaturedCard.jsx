import { View, Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../../constants/Images";
import * as ROUTS from "../../../constants/Routs";

import NewText from "../../atoms/NewText";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled.View`
  width: ${windowWidth / 2.8}px;
  height: ${windowHeight / 4}px;
`;

const ImageView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TextView = styled.View`
  gap: 8px;
`;

const Title = styled(NewText)``;

const Price = styled(NewText)``;

const Subtitle = styled(NewText)``;

const FeaturedCard = ({ title, imgUrl, subTitle, price }) => {
  return (
    <Container>
      <ImageView>
        <Image source={imgUrl} />

        <Image source={IMAGES.PlusWithWhiteBack} />
      </ImageView>

      <TextView>
        <Title font="medium" size="medium">
          {title}
        </Title>
        <Price>${price}</Price>
        <Subtitle color="grey">{subTitle}</Subtitle>
      </TextView>
    </Container>
  );
};

export default FeaturedCard;
