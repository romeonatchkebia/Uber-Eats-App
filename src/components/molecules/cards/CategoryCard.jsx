import { Image } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";

const Container = styled.Pressable`
  align-items: center;
  margin-right: 3px;
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

const CardTitle = styled(NewText)`
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
      <CardTitle font="medium">{title}</CardTitle>
    </Container>
  );
};

export default CategoryCard;
