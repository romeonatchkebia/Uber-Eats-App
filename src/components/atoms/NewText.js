import React, { useState, useEffect } from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

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
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "18px";
      case "xlarge":
        return "24px";
      case "xxlarge":
        return "36px";
      default:
        return "14px";
    }
  }};
  color: ${({ color }) => {
    switch (color) {
      case "grey":
        return "#545454;";
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
