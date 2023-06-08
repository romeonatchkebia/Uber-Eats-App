import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

import NewText from "./NewText";

const { height, width } = Dimensions.get("screen");

const BtnImage = styled.Image`
  width: ${width * 0.05}px;
  height: ${height * 0.023}px;
`;

const Button = styled.Pressable`
  align-items: center;
  background-color: #eeeeee;
  border-radius: ${width * 0.1}px;
  flex-direction: row;
  font-style: normal;
  font-weight: 500;
  gap: ${width * 0.02}px;
  height: ${height * 0.047}px;
  justify-content: center;
  padding: ${width * 0.025}px ${width * 0.04}px;
  width: ${width >= 350 ? "42%" : "35%"};
`;

const BtnText = styled(NewText)``;

const GreyBtnWithIcon = ({ title, img, onPress, ...props }) => {
  return (
    <Button {...props} onPress={onPress}>
      <BtnImage source={img} />

      <BtnText font="medium">{title}</BtnText>
    </Button>
  );
};

export default GreyBtnWithIcon;
