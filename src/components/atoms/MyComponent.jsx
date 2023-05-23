import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import styled from "styled-components";

import NewText from "../atoms/NewText";

const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
`;

const LeftView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const LeftInner = styled.View`
  margin-bottom: 10px;
`;

const RightView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const Label = styled(NewText)``;
const Price = styled(NewText)``;

const MyComponent = ({ price, subTitle, label, value }) => {
  const [checked, setChecked] = useState();

  return (
    <>
      <Container>
        <LeftView>
          <RadioButton
            value={value}
            status={checked === value ? "checked" : "unchecked"}
            onPress={() => setChecked(value)}
          />
          <LeftInner>
            {label && (
              <Label font="medium" size="medium">
                {label}
              </Label>
            )}
            {subTitle && (
              <NewText color="grey">
                US${price} • {subTitle}
              </NewText>
            )}
          </LeftInner>
        </LeftView>
        <RightView>
          {subTitle && price ? "" : price ? <Price>US${price} ea</Price> : ""}
        </RightView>
      </Container>
      <Container>
        <LeftView>
          <RadioButton
            value={value}
            status={checked === value ? "checked" : "unchecked"}
            onPress={() => setChecked(value)}
          />
          <LeftInner>
            {label && (
              <Label font="medium" size="medium">
                {label}
              </Label>
            )}
            {subTitle && (
              <NewText color="grey">
                US${price} • {subTitle}
              </NewText>
            )}
          </LeftInner>
        </LeftView>
        <RightView>
          {subTitle && price ? "" : price ? <Price>US${price} ea</Price> : ""}
        </RightView>
      </Container>
    </>
  );
};

export default MyComponent;
