import React, { useState } from "react";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";

import * as IMAGES from "../../../constants/Images";
import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const CardView = styled.Pressable`
  background: #f6f6f6;
  padding: ${width * 0.038}px;
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
  border-radius: ${width * 0.05}px;
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
  height: ${height * 0.03}px;
  width: 66%;
  position: absolute;
  top: ${height * 0.0387}px;
  left: ${width * 0.03}px;
`;

const PromotionText = styled(NewText)``;

const LikeBtnPress = styled.Pressable`
  position: absolute;
  right: ${width * 0.07}px;
  top: ${width * 0.09}px;
`;

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

      <LikeBtnPress>
        <MaterialCommunityIcons
          name={isLike ? "heart" : "heart-outline"}
          size={width >= 350 ? 26 : 18}
          color={isLike ? "red" : "white"}
          onPress={handleLike}
        />
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
