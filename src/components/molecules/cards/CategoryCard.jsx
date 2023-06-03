import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";

const { height, width } = Dimensions.get("screen");

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
`;

const CatImage = styled(ImageViewer)`
  width: ${width * 0.14}px;
  height: ${height * 0.065}px;
`;

const CategoryCard = ({ imgUrl, onPress, ...props }) => {
  return (
    <Container onPress={onPress} {...props}>
      <Wrapper>
        <ImageView>
          <CatImage source={imgUrl} />
        </ImageView>
      </Wrapper>
    </Container>
  );
};

export default CategoryCard;
