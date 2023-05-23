import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RadioForm from "react-native-simple-radio-button";

import NewText from "../atoms/NewText";

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
  gap: 22px;
  margin-bottom: 5px;
`;

const RadioComponent = ({ arr, setItemPrice }) => {
  const [value, setValue] = useState();

  console.log(value);

  useEffect(() => {
    arr.forEach((item) => {
      if (item.value === value) {
        setItemPrice(() => Number(item.price));
      }
    });
  }, [value]);

  return (
    <Container>
      <LeftView>
        <RadioForm
          style={{ gap: 10 }}
          buttonColor="black"
          buttonSize={13}
          selectedButtonColor="black"
          labelStyle={{ fontSize: 15, marginLeft: 10 }}
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
