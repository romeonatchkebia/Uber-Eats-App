import React from "react";
import styled from "styled-components";
import TextViewer from "../../atoms/TextViewer";
import ImageViewer from "../../atoms/ImageViewer";

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

const PromoText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

const RightContainer = styled.View``;

const Title = styled(TextViewer)`
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
`;

const Desc = styled(TextViewer)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`;

const CardImage = styled(ImageViewer)``;

const SoldoutView = styled.View``;

const TextWrapper = styled.View`
  flex-direction: row;
`;

const SoldoutText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(84, 84, 84, 0.5);
`;

const PriceText = styled.Text``;

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
        {title && <Title text={title} />}

        {price && itemQuantity < 21 ? (
          <SoldoutView>
            <TextWrapper>
              <SoldoutText>Sold out • </SoldoutText>
              <PriceText>US${price}</PriceText>
            </TextWrapper>
            <SoldoutText>Must be 21 to purchase</SoldoutText>
          </SoldoutView>
        ) : (
          <>
            <PriceText>US${price}</PriceText>
            <Desc text={desc} numberOfLines={3} />
          </>
        )}

        {promo && (
          <Promo>
            <PromoText>Promo</PromoText>
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
