import React from "react";
import styled from "styled-components";

import ImageViewer from "../../atoms/ImageViewer";
import NewText from "../../atoms/NewText";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #eeeeee;
  border-radius: 8px;
  height: 70px;
  width: 167px;
  margin: 12px;
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
