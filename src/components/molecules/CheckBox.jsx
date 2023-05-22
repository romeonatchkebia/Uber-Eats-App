import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
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
  justify-content: end;
  margin-bottom: 10px;
`;

const Label = styled(NewText)``;
const Price = styled(NewText)``;

const CheckBox = ({ price, subTitle, label, setItemPrice }) => {
  const [checked, setChecked] = useState(false);

  function handlePrice() {
    if (checked) {
      setItemPrice((prev) => prev - Number(price));
    } else if (!checked) {
      setItemPrice((prev) => prev + Number(price));
    }
  }

  return (
    <Container>
      <LeftView>
        <Checkbox
          value={checked}
          status={checked === true ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
            handlePrice();
          }}
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

export default CheckBox;
