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

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const Right = styled.View``;

const Devider = styled(SectionDivider)`
  height: 1px;
`;

const ItemDetailsCard = ({ title, weight, percent }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <NewText size="medium" font="medium">
            {title}
          </NewText>
          <NewText size="medium" color="grey">
            {weight}
          </NewText>
        </Left>

        <Right>
          <NewText>{percent}</NewText>
        </Right>
      </Wrapper>
      <Devider />
    </Container>
  );
};

export default ItemDetailsCard;
