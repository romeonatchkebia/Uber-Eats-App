import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  align-items: center;
  flex-direction: row;
  gap: 30px;
  padding: 15px;
  margin-left: 10px;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

const Title = styled.Text``;

const AccountCard = ({ title, imgUrl, onPress, ...props }) => {
  return (
    <Container onPress={onPress} {...props}>
      <Icon source={imgUrl} />
      <Title {...props}>{title}</Title>
    </Container>
  );
};

export default AccountCard;
