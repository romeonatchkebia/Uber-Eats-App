import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";

const Container = styled.Pressable`
  margin-bottom: 20px;
`;

const BrowseImage = styled(ImageViewer)``;

const TitleView = styled.View`
  border: 1px solid #e8e8e8;
  width: 166px;
`;

const Title = styled.Text`
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BrowseCard = ({ imgUrl, title, onPress, ...props }) => {
  return (
    <Container onPress={onPress} {...props}>
      <BrowseImage source={imgUrl} />
      <TitleView>
        <Title>{title}</Title>
      </TitleView>
    </Container>
  );
};

export default BrowseCard;
