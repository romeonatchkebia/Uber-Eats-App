import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";

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

const BrowseBtnTitle = styled(NewText)``;

const SeeAllRestBtn = styled.Pressable`
  align-items: center;
  margin-bottom: 40px;
`;

const SeeAllRestBtnText = styled(NewText)``;

const UberDecription = styled(NewText)`
  margin-bottom: 100px;
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
