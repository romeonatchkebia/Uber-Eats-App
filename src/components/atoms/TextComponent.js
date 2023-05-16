import { View, Text } from "react-native";
import React from "react";

const Container = styled.Text`
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

const TextComponent = ({ text, ...props }) => {
  return <Container {...props}>{text}</Container>;
};

export default TextComponent;
