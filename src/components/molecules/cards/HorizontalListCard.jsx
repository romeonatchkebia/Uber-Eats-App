import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components";
import ImageViewer from "../../atoms/ImageViewer";
import * as IMAGES from "../../../constants/Images";
import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const CardView = styled.Pressable`
  background: #f6f6f6;
  padding: 15px;
  position: relative;
`;

const CardImage = styled(ImageViewer)`
  width: ${width * 0.78}px;
  height: ${height * 0.155}px;
`;

const TitleRatingView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitle = styled(NewText)`
  margin-top: 8px;
`;

const CardRatingView = styled.View`
  align-items: center;
  background: #eeeeee;
  border-radius: 20px;
  height: ${width * 0.08}px;
  justify-content: center;
  margin-top: 5px;
  width: ${width * 0.08}px;
`;

const CardRating = styled(NewText)``;

const CardSubTitle = styled(NewText)``;

const PromotionView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  background: #34a853;
  height: 25px;
  width: 66%;
  position: absolute;
  top: 33px;
  left: 12px;
`;

const PromotionText = styled(NewText)``;

const LikeBtnPress = styled.Pressable`
  position: absolute;
  right: ${width * 0.07}px;
  top: ${width * 0.09}px;
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
            <CardRating size="small">{ratingValue.toFixed(1)}</CardRating>
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

export default HorizontalListCard;
