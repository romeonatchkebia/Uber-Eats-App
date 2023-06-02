import { Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../constants/Images";
import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const Mark = styled.View`
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: ${width * 0.254}px;
  border: 5px solid #276ef1;
  width: ${height >= 700 ? `${height * 0.12}px` : `${height * 0.12}px`};
  height: ${height >= 700 ? `${height * 0.12}px` : `${height * 0.12}px`};
  padding: ${width * 0.056}px;
  margin-top: 15%;
`;

const Forward = styled.Pressable`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #eeeeee;
  border-radius: ${width * 0.076}px;
  padding: ${height * 0.0259}px;
  margin-top: ${width * 0.076}px;
  width: ${width >= 350 ? `44%` : `38%`};
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
