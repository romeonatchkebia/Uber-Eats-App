import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const Container = styled.View`
  background: #f6f6f6;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  margin: 10px;
  width: 100px;
`;

const CardImage = styled(ImageViewer)``;

const Title = styled(NewText)``;

const Subtitle = styled(NewText)``;

const ThreeObjectCardForHomeScreen = ({ imgUrl, title, subTitle }) => {
  return (
    <Container>
      <CardImage source={imgUrl} />
      <Title size="large" font="medium">
        {title}
      </Title>
      <Subtitle font="medium" size="medium" color="grey">
        ${subTitle}
      </Subtitle>
    </Container>
  );
};

export default ThreeObjectCardForHomeScreen;
