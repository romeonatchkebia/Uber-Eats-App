import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import ImageViewer from "../atoms/ImageViewer";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #eeeeee;
  border-radius: 8px;
  height: 70px;
  width: 167px;
  margin: 12px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const CtgryImage = styled(ImageViewer)``;

const CategoryCardForFooter = ({ imgUrl, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <CtgryImage source={imgUrl} />
    </Container>
  );
};

export default CategoryCardForFooter;
