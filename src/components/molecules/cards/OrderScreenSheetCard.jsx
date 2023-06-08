import { Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";
import * as IMAGES from "../../../constants/Images";

const { height } = Dimensions.get("screen");

const Container = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: ${height * 0.011}px ${height * 0.0176}px;
  margin: 0 ${height * 0.0176}px ${height * 0.0176}px;
`;

const TextView = styled.View``;

const Title = styled(NewText)``;

const SubTitleTxt = styled(NewText)`
  margin-top: ${height * 0.011}px;
`;

const AddView = styled.View``;

const OrderScreenSheetCard = ({ title }) => {
  return (
    <Container>
      <TextView>
        <Title font="medium" size="medium">
          {title}
        </Title>
        <SubTitleTxt color="green">
          Buy 1, get 1 free (add 2 to basket)
        </SubTitleTxt>
      </TextView>
      <AddView>
        <Image source={IMAGES.AddPlus} />
      </AddView>
    </Container>
  );
};

export default OrderScreenSheetCard;
