import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const { height } = Dimensions.get("screen");

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #eeeeee;
  border-radius: ${height * 0.011}px;
  height: ${height * 0.083}px;
  width: 43%;
  margin: ${height * 0.011}px 0 ${height * 0.011}px ${height * 0.021}px;
`;

const Title = styled(NewText)``;

const CtgryImage = styled(ImageViewer)``;

const CategoryCardForFooter = ({ imgUrl, title }) => {
  return (
    <Container>
      <Title size="medium" font="medium">
        {title}
      </Title>
      <CtgryImage source={imgUrl} />
    </Container>
  );
};

export default CategoryCardForFooter;
