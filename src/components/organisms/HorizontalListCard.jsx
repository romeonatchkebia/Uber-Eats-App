import React, { useState } from "react";

import styled from "styled-components";
import TextViewer from "../atoms/TextViewer";
import ImageViewer from "../atoms/ImageViewer";

const CardView = styled.Pressable`
  background: #f6f6f6;
  padding: 12px;
  position: relative;
  min-height: 235px;
`;

const CardImage = styled(ImageViewer)``;

const TitleRatingView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitle = styled(TextViewer)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-top: 8px;
`;

const CardRatingView = styled.View`
  display: flex;
  align-items: center;
  background: #eeeeee;
  border-radius: 20px;
  flex-direction: column;
  height: 27px;
  justify-content: center;
  padding: 3px 5px;
  margin-top: 5px;
  width: 28px;
`;

const CardRating = styled(TextViewer)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const CardSubTitle = styled(TextViewer)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const PromotionView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  background: #34a853;
  height: 25px;
  width: 235px;
  position: absolute;
  top: 33px;
  left: 12px;
`;

const PromotionText = styled(TextViewer)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const LikeBtnPress = styled.Pressable`
  position: absolute;
  right: 32px;
  top: 36px;
`;

const LikeBtn = styled(ImageViewer)``;

const HorizontalListCard = ({
  title,
  source,
  deliveryTime,
  price,
  rating,
  promoOrdersNum,
  promoOrdersPrice,
  distance,
  ...props
}) => {
  const [isLike, setIsLike] = useState(false);
  const [ratingValue, setRatingValue] = useState(rating);

  function handleLike() {
    if (isLike) {
      setRatingValue(ratingValue - 0.1);
      setIsLike(false);
    } else if (!isLike) {
      setRatingValue(ratingValue + 0.1);
      setIsLike(true);
    }
  }

  const likeImage = isLike
    ? require("../Images/heart-filled.png")
    : require("../Images/heart.png");

  return (
    <CardView {...props}>
      <CardImage source={source} />
      <LikeBtnPress onPress={handleLike}>
        <LikeBtn source={likeImage} />
      </LikeBtnPress>

      <TitleRatingView>
        <CardTitle text={title} />
        <CardRatingView>
          <CardRating text={ratingValue.toFixed(1)} />
        </CardRatingView>
      </TitleRatingView>

      {price && (
        <CardSubTitle text={`$${price} Delivery Fee • ${deliveryTime}`} />
      )}
      {distance && (
        <CardSubTitle text={`${deliveryTime} min • ${distance}mi`} />
      )}

      {promoOrdersNum && promoOrdersPrice && (
        <PromotionView>
          <PromotionText
            text={`${promoOrdersNum} ordrs until $${promoOrdersPrice} reward`}
          />
        </PromotionView>
      )}
    </CardView>
  );
};

export default HorizontalListCard;
