import React from "react";
import { Pressable, Image, Dimensions, View } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import TextInput from "../atoms/TextInput";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: ${width * 0.038}px;
  padding-bottom: ${height >= 700 ? "15%" : "0"};
`;

// Header
const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.033}px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.04}px;
`;

const Right = styled.View`
  align-items: center;
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  flex-direction: row;
  gap: ${width * 0.013}px;
  padding: ${width * 0.013}px ${width * 0.038}px;
`;

const Input = styled(TextInput)`
  border-radius: 0px;
  width: 98%;
  height: ${height * 0.205}px;
  font-size: ${width * 0.04}px;
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
                <Feather
                  name="arrow-left"
                  size={width >= 350 ? 26 : 18}
                  color="black"
                />
              </Pressable>

              <NewText font="medium" size="xlarge">
                Leave a note
              </NewText>
            </Left>

            <Right>
              <Ionicons name="cart" size={width >= 350 ? 26 : 18} />

              <NewText size="medium">1</NewText>
            </Right>
          </Header>

          <Input placeholder="Leave a note for your Shopper..." />

          <NewText
            color="grey"
            style={{ marginVertical: height * 0.035, paddingHorizontal: 20 }}
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
