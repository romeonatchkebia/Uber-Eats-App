import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import ImageViewer from "../atoms/ImageViewer";

const Container = styled.View`
  background: #f6f6f6;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  margin: 10px;
  width: 100px;
`;

const CardImage = styled(ImageViewer)``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 19.3825px;
  line-height: 24px;
  color: #000000;
`;

const Subtitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16.9597px;
  line-height: 24px;
  color: #6b6b6b;
`;

const ThreeObjectCardForHomeScreen = ({ imgUrl, title, subTitle }) => {
  return (
    <Container>
      <CardImage source={imgUrl} />
      <Title>{title}</Title>
      <Subtitle>${subTitle}</Subtitle>
    </Container>
  );
};

export default ThreeObjectCardForHomeScreen;
