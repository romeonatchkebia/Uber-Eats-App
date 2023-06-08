import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import RadioForm from "react-native-simple-radio-button";

import NewText from "../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
`;

const LeftView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const RightView = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  gap: ${width * 0.056}px;
  margin-bottom: ${width * 0.013}px;
`;

const RadioComponent = ({ arr, setItemPrice, setSelectedItem }) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    arr.forEach((item) => {
      if (item.value === value) {
        setItemPrice(() => parseFloat(item.price));
        setSelectedItem([item]);
      }
    });
  }, [value]);

  return (
    <Container>
      <LeftView>
        <RadioForm
          style={{ gap: width * 0.025 }}
          buttonColor="black"
          buttonSize={height * 0.015}
          selectedButtonColor="black"
          labelStyle={{ fontSize: width * 0.038, marginLeft: width * 0.025 }}
          radio_props={arr}
          initial={value}
          onPress={(value) => {
            setValue(value);
          }}
        />
      </LeftView>
      <RightView>
        {arr.map((item) => {
          if (item.price > 0) {
            return <NewText key={item.id}>US${item.price} ea</NewText>;
          }
        })}
      </RightView>
    </Container>
  );
};

export default RadioComponent;
