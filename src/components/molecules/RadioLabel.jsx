import React, { useState } from "react";
import styled from "styled-components";
import { RadioButton } from "react-native-paper";

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

const RadioLabel = ({ price, subTitle, label, checked, onPress }) => {
  return (
    <Container>
      <LeftView>
        <RadioButton
          value={checked}
          status={checked === true ? "checked" : "unchecked"}
          onPress={onPress}
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
  );
};

export default RadioLabel;
