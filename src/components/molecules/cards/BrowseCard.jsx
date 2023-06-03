import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  margin-bottom: ${height * 0.019}px;
`;

const BrowseImage = styled(ImageViewer)`
  border-top-right-radius: ${width * 0.038}px;
  border-top-left-radius: ${width * 0.038}px;
  width: ${width * 0.422}px;
  height: ${height * 0.115}px;
`;

const TitleView = styled.Pressable`
  align-items: center;
  border: 1px solid #e8e8e8;
  background-color: #ffffff;
  border-bottom-left-radius: ${width * 0.038}px;
  border-bottom-right-radius: ${width * 0.038}px;
  width: ${width * 0.422}px;
`;

const Title = styled(NewText)`
  text-align: center;
  margin-top: ${height * 0.012}px;
  margin-bottom: ${height * 0.012}px;
`;

const BrowseCard = ({ imgUrl, title, onPress, ...props }) => {
  return (
    <Container onPress={onPress} {...props}>
      <BrowseImage source={imgUrl} />
      <TitleView>
        <Title onPress={onPress} size="medium">
          {title}
        </Title>
      </TitleView>
    </Container>
  );
};

export default BrowseCard;
