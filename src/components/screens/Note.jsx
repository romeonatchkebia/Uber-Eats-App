import React from "react";
import { Pressable, Image, Dimensions, View } from "react-native";
import styled from "styled-components";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import TextInput from "../atoms/TextInput";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled(Screen)``;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 0 15px;
  padding-bottom: 30px;
`;

// Header
const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

const Right = styled.View`
  align-items: center;
  background: #eeeeee;
  border-radius: 50px;
  flex-direction: row;
  gap: 5px;
  padding: 5px 15px;
`;

const Input = styled(TextInput)`
  border-radius: 0px;
  width: ${windowWidth / 1.1}px;
  height: ${windowHeight / 3}px;
`;

const Note = ({ navigation }) => {
  return (
    <Container>
      <Wrapper>
        <View>
          <Header>
            <Left>
              <Pressable
                onPress={() => navigation.goBack(ROUTS.HOMESCREEN_SCREEN)}
              >
                <Image source={IMAGES.LeftArrow} />
              </Pressable>

              <NewText font="medium" size="xlarge">
                Leave a note
              </NewText>
            </Left>

            <Right>
              <Image source={IMAGES.Cart} />
              <NewText size="medium">1</NewText>
            </Right>
          </Header>

          <Input placeholder="Leave a note for your Shopper..." />

          <NewText
            color="grey"
            style={{ marginVertical: 30, paddingHorizontal: 20 }}
          >
            Your Shopper will try their best to follow your notes and may
            contact you if they need your help making a decision.
          </NewText>
        </View>

        <BigBlackGreyBtn
          title="Save"
          black
          onPress={() => navigation.goBack(ROUTS.HOMESCREEN_SCREEN)}
        />
      </Wrapper>
    </Container>
  );
};

export default Note;
