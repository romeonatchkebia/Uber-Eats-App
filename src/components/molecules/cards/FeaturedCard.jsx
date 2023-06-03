import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../../constants/Images";
import ImageViewer from "../../atoms/ImageViewer";

import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  width: ${width * 0.356}px;
  height: ${height * 0.3}px;
`;

const ImageView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CardImage = styled(ImageViewer)`
  width: ${width * 0.254}px;
  height: ${height * 0.118}px;
`;

const PlusImage = styled(ImageViewer)`
  width: ${width * 0.089}px;
  height: ${height * 0.041}px;
`;

const TextView = styled.View`
  gap: ${width * 0.02}px;
`;

const Title = styled(NewText)`
  margin-top: ${width * 0.02}px;
  width: 80%;
`;

const Price = styled(NewText)``;

const Subtitle = styled(NewText)``;

const FeaturedCard = ({ title, imgUrl, subTitle, price, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ImageView>
        <CardImage source={imgUrl} />

        <PlusImage source={IMAGES.PlusWithWhiteBack} />
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
