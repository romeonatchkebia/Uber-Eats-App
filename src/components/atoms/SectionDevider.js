import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

const { height } = Dimensions.get("screen");

const Container = styled.View`
  background-color: #e5e5e5;
  height: ${height * 0.011}px;
`;

const SectionDevider = ({ ...props }) => {
  return <Container {...props}></Container>;
};

export default SectionDevider;
