import React, { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";
import * as IMAGES from "../../../constants/Images";

const CardView = styled.Pressable`
  background: #f6f6f6;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CardImage = styled(ImageViewer)``;

const TitleRatingView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${Platform.OS === "ios" ? 90 : 100}%;
  padding-right: ${Platform.OS === "ios" ? 0 : 5}px;
  padding-left: ${Platform.OS === "ios" ? 0 : 5}px;
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
`;

const CardRating = styled(NewText)`
  text-align: center;
`;

const SubtitleView = styled.View`
  width: ${Platform.OS === "ios" ? 90 : 100}%;
  padding-left: ${Platform.OS === "ios" ? 0 : 5}px;
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
  left: ${Platform.OS === "ios" ? 19 : 3}px;
  top: 33px;
`;

const PromotionText = styled(NewText)``;

const LikeBtnPress = styled.Pressable`
  position: absolute;
  right: 38px;
  top: 36px;
`;

const LikeBtn = styled(ImageViewer)``;

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
