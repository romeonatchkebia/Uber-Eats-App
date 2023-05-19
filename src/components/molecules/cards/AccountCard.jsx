import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";

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
