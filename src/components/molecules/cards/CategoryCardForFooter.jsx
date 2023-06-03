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
  border-radius: 8px;
  height: ${height * 0.083}px;
  width: 43%;
  margin: 10px 0 10px 18px;
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
