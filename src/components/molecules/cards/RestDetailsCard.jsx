import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.023}px;
  width: 100%;
`;

const LeftContainer = styled.View`
  width: ${({ img }) => (img ? "60%" : "90%")};
`;

const Promo = styled.View`
  justify-content: center;
  align-items: center;
  background: #34a853;
  border-radius: ${width * 0.063}px;
  padding: ${height * 0.006}px ${height * 0.009}px;
  width: ${width >= 350 ? "20%" : "15%"};
  height: ${height * 0.035}px;
  margin-top: ${height * 0.009}px;
`;

const PromoText = styled(NewText)`
  text-align: center;
`;

const RightContainer = styled.View``;

const Title = styled(NewText)``;

const Desc = styled(NewText)``;

const CardImage = styled(ImageViewer)`
  width: ${width * 0.29}px;
  height: ${height * 0.12}px;
`;

const SoldoutView = styled.View``;

const TextWrapper = styled.View`
  flex-direction: row;
`;

const SoldoutText = styled(NewText)``;

const PriceText = styled(NewText)``;

const RestDetailsCard = ({
  title,
  price,
  desc,
  img,
  promo,
  itemQuantity,
  popular,
  onPress,
  ...props
}) => {
  return (
    <Container onPress={onPress} {...props}>
      <LeftContainer img={img}>
        {title && (
          <Title size="medium" font="medium">
            {title}
          </Title>
        )}

        {price && itemQuantity < 21 ? (
          <SoldoutView>
            <TextWrapper>
              <SoldoutText color="grey">Sold out • </SoldoutText>

              <PriceText>US${price}</PriceText>
            </TextWrapper>

            <SoldoutText>Must be 21 to purchase</SoldoutText>
          </SoldoutView>
        ) : (
          <>
            <PriceText>US${price}</PriceText>

            <Desc color="grey" numberOfLines={3}>
              {desc}
            </Desc>
          </>
        )}

        {promo && (
          <Promo>
            <PromoText font="medium" color="white">
              Promo
            </PromoText>
          </Promo>
        )}
      </LeftContainer>

      <RightContainer>
        <CardImage source={img} />
      </RightContainer>
    </Container>
  );
};

export default RestDetailsCard;
