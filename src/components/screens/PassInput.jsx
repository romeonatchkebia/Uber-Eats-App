import { Image, Pressable, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 15px;
`;

const Title = styled(NewText)`
  font-size: 20px;
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
  font-size: 20px;
  height: 50px;
  width: 85%;
  padding: 15px 5%;
`;

const Forgot = styled.Pressable`
  background: #eeeeee;
  border-radius: 30px;
  margin-bottom: 25px;
  padding: 15px 10px;
  width: 62%;
`;

const SinIn = styled.Pressable`
  background: #eeeeee;
  border-radius: 30px;
  padding: 15px 10px;
  width: 32%;
`;

const BottomView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Back = styled.Pressable`
  background: #eeeeee;
  border-radius: 50px;
  padding: 20px 20px;
  width: 18%;
`;
const Forward = styled.Pressable`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #eeeeee;
  border-radius: 30px;
  padding: 16px 20px;
  width: 32%;
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
          <Title font="medium">Welcome back, John</Title>

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
