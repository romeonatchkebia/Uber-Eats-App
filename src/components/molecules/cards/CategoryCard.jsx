import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  align-items: center;
`;

const Wrapper = styled.View`
  background-color: rgba(230, 230, 230, 0.4);
  border-radius: 5px;
`;

const ImageView = styled.View`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 75px;
`;

const CardTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14.4829px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`;

const CategoryCard = ({ imgUrl, title, onPress, ...props }) => {
  return (
    <Container onPress={onPress} {...props}>
      <Wrapper>
        <ImageView>
          <Image source={imgUrl} />
        </ImageView>
      </Wrapper>
      <CardTitle>{title}</CardTitle>
    </Container>
  );
};

export default CategoryCard;
