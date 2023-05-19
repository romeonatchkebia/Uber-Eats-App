import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../../constants/Images";
import NewText from "../../atoms/NewText";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

const CardImage = styled.Image``;

const TextCont = styled.View`
  width: 70%;
`;

const Title = styled(NewText)``;

const SubTitle = styled(NewText)``;

const Desc = styled(NewText)``;

const RightArrow = styled.Image``;

const BasketsCard = ({ title, price, desc, imgUrl, ...props }) => {
  return (
    <Container {...props}>
      <CardImage source={imgUrl} />
      <TextCont>
        <Title size="medium" font="medium">
          {title}
        </Title>
        <SubTitle color="grey">1 Item • US${price}</SubTitle>
        <Desc numberOfLines={2} color="grey">
          {desc}
        </Desc>
      </TextCont>
      <RightArrow source={IMAGES.RightArrow} />
    </Container>
  );
};

export default BasketsCard;
