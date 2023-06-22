import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: ${width * 0.025}px;
  width: 100%;
`;

const CardImage = styled.Image`
  border-radius: ${width * 0.13}px;
  height: ${height * 0.082}px;
  width: ${width * 0.18}px;
`;

const TextCont = styled.View`
  width: 70%;
`;

const Title = styled(NewText)``;

const SubTitle = styled(NewText)``;

const Desc = styled(NewText)``;

const BasketsCard = ({ title, price, desc, imgUrl, onPress, ...props }) => {
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

      <MaterialIcons
        name="delete"
        size={width >= 350 ? 30 : 22}
        color="orange"
        onPress={onPress}
      />
    </Container>
  );
};

export default BasketsCard;
