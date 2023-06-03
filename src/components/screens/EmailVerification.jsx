import { Image, View, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

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
  line-height: ${width * 0.076}px;
  margin-top: 20%;
`;

const Input = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  margin: 25px 0;
`;

const Tip = styled.View`
  margin-bottom: ${width * 0.063}px;
`;

const LogIn = styled.Pressable`
  background: #eeeeee;
  border-radius: ${width * 0.076}px;
  padding: 15px 10px;
  width: ${width >= 350 ? `55%` : `45%`};
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

const CELL_COUNT = 4;

const EmailVerification = ({ navigation }) => {
  const [value, setValue] = useState("");

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Container>
      <Wrapper>
        <View>
          <Title font="medium" size="xlarge">
            Enter the 4-digit code sent to you at: Johndoe@email.com
          </Title>

          <Input>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <NewText
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </NewText>
              )}
            />
          </Input>

          <Tip>
            <NewText color="grey">
              Tip: Make sure to check your inbox and spam folders
            </NewText>
          </Tip>

          <LogIn>
            <NewText font="medium" size="medium">
              Log in with password
            </NewText>
          </LogIn>
        </View>

        <BottomView>
          <Back onPress={() => navigation.goBack()}>
            <Image source={IMAGES.LeftArrow} />
          </Back>

          <Forward
            onPress={() => value.length > 0 && navigation.navigate("Welcome")}
          >
            <NewText
              size="large"
              font="medium"
              color={value.length <= 0 ? "grey" : ""}
            >
              Next
            </NewText>

            <Image
              source={
                value.length <= 0
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

const styles = StyleSheet.create({
  cell: {
    width: width * 0.14,
    height: height * 0.06,
    lineHeight: width * 0.096,
    fontSize: width * 0.06,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    margin: width * 0.03,
  },
  focusCell: {
    borderColor: "#000",
  },
});

export default EmailVerification;
