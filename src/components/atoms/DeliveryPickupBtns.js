import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

import NewText from "./NewText";

const { height, width } = Dimensions.get("screen");

const Btn = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: ${width * 0.1}px;
  ${({ black }) => (black ? `background - color : #ffffff` : "")};
  width: 50%;
`;

const BtnText = styled(NewText)`
  ${({ black }) => (black ? `color : #000000` : "")};
`;

const TimeText = styled(NewText)``;

const DeliveryPickupBtns = ({
  Time,
  Distance,
  onPress,
  black = false,
  title,
  ...props
}) => {
  return (
    <Btn onPress={onPress} black={black} {...props}>
      {title && (
        <BtnText font="medium" black={black}>
          {title}
        </BtnText>
      )}
      {Time && Distance && (
        <TimeText font="medium" color="grey">
          {Time} min {Distance}mi
        </TimeText>
      )}
    </Btn>
  );
};

export default DeliveryPickupBtns;
