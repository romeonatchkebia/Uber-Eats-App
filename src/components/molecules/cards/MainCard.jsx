import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";
import * as IMAGES from "../../../constants/Images";

const { height, width } = Dimensions.get("screen");

const CardView = styled.Pressable`
  background: #f6f6f6;
  align-items: center;
  position: relative;
  padding: ${width * 0.038}px;
`;

const CardImage = styled(ImageViewer)`
  width: ${width * 0.9}px;
  height: ${height * 0.18}px;
`;

const TitleRatingView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 98%;
`;

const CardTitle = styled(NewText)``;

const CardRatingView = styled.View`
  align-items: center;
  background: #eeeeee;
  border-radius: ${width * 0.05}px;
  height: ${width * 0.08}px;
  justify-content: center;
  margin-top: 5px;
  width: ${width * 0.08}px;
`;

const CardRating = styled(NewText)``;

const SubtitleView = styled.View`
  width: 98%;
`;

const CardSubTitle = styled(NewText)``;

const PromotionView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${width * 0.19}px;
  border-bottom-right-radius: ${width * 0.19}px;
  background: #34a853;
  height: 13%;
  width: 62%;
  position: absolute;
  left: ${width * 0.05}px;
  top: ${width * 0.084}px;
`;

const PromotionText = styled(NewText)``;

const LikeBtnPress = styled.Pressable`
  position: absolute;
  right: ${width * 0.096}px;
  top: ${width * 0.091}px;
`;

const LikeBtn = styled(ImageViewer)`
  width: ${width * 0.056}px;
  height: ${width * 0.051}px;
`;

const MainCard = ({
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

      <SubtitleView>
        {price && (
          <CardSubTitle color="grey">{`$${price} Delivery Fee • ${deliveryTime}`}</CardSubTitle>
        )}
        {distance && (
          <CardSubTitle color="grey">{`${deliveryTime} min • ${distance}mi`}</CardSubTitle>
        )}
      </SubtitleView>

      {promoOrdersNum && promoOrdersPrice && (
        <PromotionView>
          <PromotionText
            font="medium"
            color="white"
          >{`${promoOrdersNum} ordrs until $${promoOrdersPrice} reward`}</PromotionText>
        </PromotionView>
      )}
    </CardView>
  );
};

export default MainCard;
