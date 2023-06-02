import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

const { height, width } = Dimensions.get("screen");

const CustomText = styled.Text`
  font-family: ${({ font }) => {
    switch (font) {
      case "bold":
        return "uber-bold";
      case "medium":
        return "uber-medium";
      default:
        return "uber-regular";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return `${height * 0.015}px`;
      case "medium":
        return `${height * 0.019}px`;
      case "large":
        return `${height * 0.0212}px`;
      case "xlarge":
        return `${height * 0.0289}px`;
      case "xxlarge":
        return `${height * 0.0423}px`;
      default:
        return `${height * 0.017}px`;
    }
  }};
  color: ${({ color }) => {
    switch (color) {
      case "grey":
        return "#7F7F7F";
      case "white":
        return "#ffffff";
      case "green":
        return "#05A357;";
      case "red":
        return "#D01515";
      default:
        return "#000000";
    }
  }};
`;

const NewText = ({
  children,
  font,
  size,
  color,
  onPress,
  visible = true,
  ...props
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  if (show) {
    return (
      <CustomText
        font={font}
        size={size}
        color={color}
        onPress={onPress}
        {...props}
      >
        {children}
      </CustomText>
    );
  } else {
    return null;
  }
};

export default NewText;
