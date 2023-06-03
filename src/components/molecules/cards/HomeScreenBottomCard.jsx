import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  background: #f6f6f6;
  padding: ${width * 0.038}px;
`;

const BrowseBtn = styled.Pressable`
  align-items: center;
  border: 1px solid #000000;
  justify-content: center;
  height: ${width * 0.13}px;
  margin-top: ${width * 0.13}px;
  margin-bottom: ${width * 0.063}px;
`;

const BrowseBtnTitle = styled(NewText)``;

const SeeAllRestBtn = styled.Pressable`
  align-items: center;
  margin-bottom: ${width * 0.1}px;
`;

const SeeAllRestBtnText = styled(NewText)``;

const UberDecription = styled(NewText)`
  margin-bottom: ${width * 0.25}px;
`;

const HomeScreenBottomCard = () => {
  return (
    <Container>
      <BrowseBtn>
        <BrowseBtnTitle size="medium">BROWSE OR SEARCH</BrowseBtnTitle>
      </BrowseBtn>
      <SeeAllRestBtn>
        <SeeAllRestBtnText color="grey">SEE ALL RESTAURANTS</SeeAllRestBtnText>
      </SeeAllRestBtn>
      <UberDecription>
        Uber is paid by merchants for marketing and promotion, which influences
        personalized recomendations you see. Learn more or change settings
      </UberDecription>
    </Container>
  );
};

export default HomeScreenBottomCard;
