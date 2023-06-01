import { Image, Text } from "react-native";
import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../constants/Images";
import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 15px;
`;

const Mark = styled.View`
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 100px;
  border: 5px solid #276ef1;
  width: 100px;
  height: 100px;
  padding: 22px;
  margin-top: 15%;
`;

const Forward = styled.Pressable`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #eeeeee;
  border-radius: 30px;
  padding: 20px 20px;
  margin-top: 30px;
  width: 42%;
`;

const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Wrapper>
        <Mark>
          <Image source={IMAGES.ConfirmVector} />
        </Mark>

        <NewText
          font="medium"
          size="xlarge"
          style={{ marginVertical: 30, marginHorizontal: 15 }}
        >
          All set.
        </NewText>

        <NewText color="grey">
          You'll be signed into your account in a moment. If nothing happens,
          click continue
        </NewText>

        <Forward onPress={() => navigation.navigate(ROUTS.BOTTOM_TAB_NAV)}>
          <NewText size="large" font="bold">
            Continue
          </NewText>

          <Image source={IMAGES.RightArrowBlack} />
        </Forward>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
