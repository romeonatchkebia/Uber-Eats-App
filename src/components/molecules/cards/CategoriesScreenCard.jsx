import { Image } from "react-native";
import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../../constants/Images";

import NewText from "../../atoms/NewText";
import SectionDivider from "../../atoms/SectionDevider";

const Container = styled.View`
  margin: 10px 0;
`;

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Left = styled.View``;

const Middle = styled.View``;

const Right = styled.View``;

const Devider = styled(SectionDivider)`
  height: 1px;
`;

const CategoriesScreenCard = ({ imgUrl, title }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image source={imgUrl} />
        </Left>
        <Middle>
          <NewText size="medium">{title}</NewText>
        </Middle>
        <Right>
          <Image source={IMAGES.RightArrow} />
        </Right>
      </Wrapper>
      <Devider />
    </Container>
  );
};

export default CategoriesScreenCard;
