import React from "react";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const LeftContainer = styled.View`
  width: ${({ img }) => (img ? "60%" : "90%")};
`;

const Promo = styled.View`
  justify-content: center;
  align-items: center;
  background: #34a853;
  border-radius: 25px;
  padding: 5px 8px;
  width: 60px;
  height: 30px;
  margin-top: 8px;
`;

const PromoText = styled(NewText)`
  text-align: center;
`;

const RightContainer = styled.View``;

const Title = styled(NewText)``;

const Desc = styled(NewText)``;

const CardImage = styled(ImageViewer)``;

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
  ...props
}) => {
  return (
    <Container {...props}>
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
