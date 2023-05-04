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

const Desc = styled(TextViewer)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`;

const CardImage = styled(ImageViewer)``;

const PriceText = styled.Text``;

const Popular = styled.View`
  justify-content: center;
  align-items: center;
  background: #34a853;
  border-radius: 25px;
  padding: 5px 8px;
  width: 67px;
  height: 30px;
  margin-top: 8px;
`;

const PopularText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
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
        {title && <Title text={title} />}
        {price && <PriceText>US${price}</PriceText>}
        {desc && <Desc text={desc} numberOfLines={3} />}

        {promo && (
          <Promo>
            <PromoText>Promo</PromoText>
          </Promo>
        )}
        {popular && (
          <Popular>
            <PopularText>Popular</PopularText>
          </Popular>
        )}
      </LeftContainer>

      <RightContainer>{img && <CardImage source={img} />}</RightContainer>
    </Container>
  );
};

export default RestDetailsPopularCard;
