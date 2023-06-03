import { Image, View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
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

const CodeReceive = styled.Pressable`
  background: #eeeeee;
  border-radius: ${width * 0.076}px;
  margin-bottom: ${width * 0.063}px;
  padding: 15px 10px;
  width: ${width >= 350 ? `68%` : `58%`};
`;

const LogIn = styled.Pressable`
  background: #eeeeee;
  border-radius: ${width * 0.076}px;
  padding: 15px 10px;
  width: ${width >= 350 ? `53%` : `45%`};
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

const PhoneVerification = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [sendCode, setSendCode] = useState(false);
  const [second, setSecond] = useState(9);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    let intervalId = null;

    if (sendCode) {
      intervalId = setInterval(() => {
        setSecond((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    if (second === 0) {
      setSendCode(false);
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [sendCode, second]);

  return (
    <Container>
      <Wrapper>
        <View>
          <Title font="medium" size="xlarge">
            Enter the 4-digit code sent to you at 088833729327
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

          <CodeReceive
            onPress={() => {
              setSendCode(!sendCode);
              setSecond(9);
            }}
          >
            <NewText
              font="medium"
              size="medium"
              color={!sendCode ? "" : "grey"}
            >
              I haven't recieved a code ({second})
            </NewText>
          </CodeReceive>

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
            onPress={() =>
              value.length > 0 && navigation.navigate("EmailVerification")
            }
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

export default PhoneVerification;
