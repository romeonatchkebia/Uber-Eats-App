import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.023}px;
  width: 100%;
`;

const LeftContainer = styled.View`
  width: ${({ img }) => (img ? "60%" : "90%")};
`;

const RightContainer = styled.View``;

const Title = styled(NewText)``;

const Desc = styled(NewText)``;

const CardImage = styled(ImageViewer)`
  width: ${width * 0.29}px;
  height: ${height * 0.12}px;
`;

const PriceText = styled(NewText)``;

const Popular = styled.View`
  justify-content: center;
  align-items: center;
  background: #34a853;
  border-radius: ${width * 0.063}px;
  padding: ${height * 0.006}px ${height * 0.009}px;
  width: ${width >= 350 ? "22%" : "18%"};
  height: ${height * 0.035}px;
  margin-top: ${height * 0.009}px;
`;

const PopularText = styled(NewText)`
  text-align: center;
`;

const RestDetailsPopularCard = ({
  title,
  price,
  desc,
  img,
  promo,
  itemQuantity,
  popular,
  ...props
}) => {
  return (
    <Container {...props}>
      <LeftContainer img={img}>
        {title && (
          <Title font="medium" size="medium">
            {title}{" "}
          </Title>
        )}
        {price && <PriceText>US${price}</PriceText>}
        {desc && (
          <Desc color="grey" numberOfLines={3}>
            {desc}
          </Desc>
        )}

        {popular && (
          <Popular>
            <PopularText font="medium" color="white">
              Popular
            </PopularText>
          </Popular>
        )}
      </LeftContainer>

      <RightContainer>{img && <CardImage source={img} />}</RightContainer>
    </Container>
  );
};

export default RestDetailsPopularCard;
