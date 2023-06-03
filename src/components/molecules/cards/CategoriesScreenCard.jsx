import { Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import NewText from "../../atoms/NewText";
import SectionDivider from "../../atoms/SectionDevider";

const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  margin: ${width * 0.025}px 0;
`;

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${width * 0.025}px;
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
          <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
        </Right>
      </Wrapper>
      <Devider />
    </Container>
  );
};

export default CategoriesScreenCard;
