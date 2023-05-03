import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  background: #f6f6f6;
`;

const BrowseBtn = styled.Pressable`
  align-items: center;
  border: 1px solid #000000;
  justify-content: center;
  height: 55px;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const BrowseBtnTitle = styled.Text`
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const SeeAllRestBtn = styled.Pressable`
  align-items: center;
  margin-bottom: 40px;
`;

const SeeAllRestBtnText = styled.Text`
  color: #6b6b6b;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const UberDecription = styled.Text`
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 100px;
`;

const HomeScreenBottomCard = () => {
  return (
    <Container>
      <BrowseBtn>
        <BrowseBtnTitle>BROWSE OR SEARCH</BrowseBtnTitle>
      </BrowseBtn>
      <SeeAllRestBtn>
        <SeeAllRestBtnText>SEE ALL RESTAURANTS</SeeAllRestBtnText>
      </SeeAllRestBtn>
      <UberDecription>
        Uber is paid by merchants for marketing and promotion, which influences
        personalized recomendations you see. Learn more or change settings
      </UberDecription>
    </Container>
  );
};

export default HomeScreenBottomCard;
