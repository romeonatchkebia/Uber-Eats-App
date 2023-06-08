import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.076}px;
  padding: ${height * 0.017}px;
`;

const Icon = styled.Image`
  width: ${width * 0.063}px;
  height: ${height * 0.029}px;
`;

const Title = styled(NewText)``;

const AccountCard = ({ title, imgUrl, onPress, ...props }) => {
  return (
    <Container onPress={onPress} {...props}>
      <Icon source={imgUrl} />
      <Title onPress={onPress} font="medium" {...props}>
        {title}
      </Title>
    </Container>
  );
};

export default AccountCard;
