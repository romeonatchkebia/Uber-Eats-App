import React, { useState } from "react";

import styled from "styled-components";
import ImageViewer from "../../atoms/ImageViewer";
import * as IMAGES from "../../../constants/Images";
import NewText from "../../atoms/NewText";

const CardView = styled.Pressable`
  background: #f6f6f6;
  padding: 12px;
  position: relative;
`;

const CardImage = styled(ImageViewer)``;

const TitleRatingView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitle = styled(NewText)`
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

const CardRating = styled(NewText)`
  text-align: center;
`;

const CardSubTitle = styled(NewText)``;

const PromotionView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  background: #34a853;
  height: 25px;
  width: 62%;
  position: absolute;
  top: 33px;
  left: 12px;
`;

const PromotionText = styled(NewText)``;

const LikeBtnPress = styled.Pressable`
  position: absolute;
  right: 34px;
  top: 36px;
`;

const LikeBtn = styled(ImageViewer)``;

const DealsScreenCard = ({
  title,
  source,
  deliveryTime,
  price,
  rating,
  promoOrdersNum,
  promoOrdersPrice,
  distance,
  onPress,
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

  const likeImage = isLike ? IMAGES.HeartFilled : IMAGES.Heart;

  return (
    <CardView {...props} onPress={onPress}>
      <CardImage source={source} />
      <LikeBtnPress onPress={handleLike}>
        <LikeBtn source={likeImage} />
      </LikeBtnPress>

      <TitleRatingView>
        <CardTitle size="medium" font="medium">
          {title}
        </CardTitle>
        <CardRatingView>
          {ratingValue && (
            <CardRating size="small">{ratingValue.toFixed(1)} </CardRating>
          )}
        </CardRatingView>
      </TitleRatingView>

      {price && (
        <CardSubTitle color="grey">{`$${price} Delivery Fee • ${deliveryTime}`}</CardSubTitle>
      )}
      {distance && (
        <CardSubTitle color="grey">{`${deliveryTime} min • ${distance}mi`}</CardSubTitle>
      )}

      {promoOrdersNum && promoOrdersPrice && (
        <PromotionView>
          <PromotionText
            color="white"
            font="medium"
          >{`${promoOrdersNum} ordrs until $${promoOrdersPrice} reward`}</PromotionText>
        </PromotionView>
      )}
    </CardView>
  );
};

export default DealsScreenCard;
