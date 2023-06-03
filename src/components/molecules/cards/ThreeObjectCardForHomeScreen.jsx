import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  background: #f6f6f6;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  margin: 5px;
  width: ${width * 0.3}px;
`;

const CardImage = styled(ImageViewer)`
  height: ${height * 0.1745}px;
  width: ${width * 0.253}px;
`;

const TitleView = styled.View`
  height: ${height >= 700 ? `12%` : `7%`};
`;

const Title = styled(NewText)``;

const Subtitle = styled.View`
  margin-top: ${height * 0.02}px;
`;

const ThreeObjectCardForHomeScreen = ({ imgUrl, title, subTitle }) => {
  return (
    <Container>
      <CardImage source={imgUrl} />

      <TitleView numberOfLines={2}>
        <Title size="large" font="medium" numberOfLines={2}>
          {title}
        </Title>
      </TitleView>

      <Subtitle>
        <NewText font="medium" size="medium" color="grey">
          ${subTitle}
        </NewText>
      </Subtitle>
    </Container>
  );
};

export default ThreeObjectCardForHomeScreen;
