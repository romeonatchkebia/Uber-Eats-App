import { Image } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";
import * as IMAGES from "../../../constants/Images";

const Container = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 0 15px 15px;
`;

const TextView = styled.View``;

const Title = styled(NewText)``;

const SubTitleTxt = styled(NewText)`
  margin-top: 10px;
`;

const AddView = styled.View``;

const Hury = ({ title }) => {
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

export default Hury;
