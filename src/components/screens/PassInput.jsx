import { Image, Pressable, View, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: ${width * 0.038}px;
  padding-bottom: 10%;
`;

const Title = styled(NewText)`
  margin-top: 20%;
`;

const Input = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  margin: 25px 0;
`;

const InputText = styled(TextInput)`
  background: #eeeeee;
  height: ${height >= 700 ? `${height * 0.07}px` : `${height * 0.08}px`};
  width: 85%;
  padding: 10px 10px;
`;

const Forgot = styled.Pressable`
  background: #eeeeee;
  border-radius: ${width * 0.076}px;
  margin-bottom: ${width * 0.063}px;
  padding: 15px 10px;
  width: ${width >= 350 ? `68%` : `55%`};
`;

const SinIn = styled.Pressable`
  background: #eeeeee;
  border-radius: ${width * 0.076}px;
  padding: 15px 10px;
  width: ${width >= 350 ? `35%` : `32%`};
`;

const BottomView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Back = styled.Pressable`
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  padding: ${height * 0.03}px;
`;

const Forward = styled.Pressable`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #eeeeee;
  border-radius: ${width * 0.1}px;
  gap: 10px;
  padding: ${height * 0.0259}px;
`;

const PassInput = ({ navigation }) => {
  const [input, setInput] = useState([]);
  const [show, setShow] = useState(false);

  const handleInputChange = (text) => {
    setInput(text);
  };

  return (
    <Container>
      <Wrapper>
        <View>
          <Title font="medium" size="xlarge">
            Welcome back, John
          </Title>

          <Input>
            <InputText
              placeholder="Please enter your password"
              onChangeText={handleInputChange}
              secureTextEntry={show ? true : false}
            ></InputText>

            <Pressable onPress={() => setShow(!show)}>
              <Image source={IMAGES.Eye} />
            </Pressable>
          </Input>

          <Forgot>
            <NewText font="medium" size="medium">
              I've forgotten my password
            </NewText>
          </Forgot>

          <SinIn>
            <NewText font="medium" size="medium">
              I cant sign in
            </NewText>
          </SinIn>
        </View>

        <BottomView>
          <Back onPress={() => navigation.goBack()}>
            <Image source={IMAGES.LeftArrow} />
          </Back>

          <Forward
            onPress={() =>
              input.length > 0 && navigation.navigate("PhoneVerification")
            }
          >
            <NewText
              size="large"
              font="medium"
              color={input.length <= 0 ? "grey" : ""}
            >
              Next
            </NewText>

            <Image
              source={
                input.length <= 0
                  ? IMAGES.RightArrowGrey
                  : IMAGES.RightArrowBlack
              }
            />
          </Forward>
        </BottomView>
      </Wrapper>
    </Container>
  );
};

export default PassInput;
