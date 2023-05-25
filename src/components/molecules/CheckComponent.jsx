import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "expo-checkbox";

import NewText from "../atoms/NewText";

const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
`;

const LeftView = styled.View`
  flex-direction: row;
`;

const LeftInner = styled.View`
  margin-bottom: 10px;
  margin-left: 10px;
`;

const RightView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const Label = styled(NewText)``;
const Price = styled(NewText)``;

const CheckComponent = ({
  price,
  subTitle,
  label,
  arr,
  setItemPrice,
  setSelectedName,
}) => {
  const [checked, setChecked] = useState(false);

  function handlePrice() {
    if (checked) {
      setItemPrice((prev) => prev - parseFloat(price));
    } else if (!checked) {
      setItemPrice((prev) => prev + parseFloat(price));
    }
  }

  function handleName() {
    if (checked) {
      setSelectedName((prev) => prev.filter((item) => item.label !== label));
    } else if (!checked) {
      arr.forEach((item) => {
        if (item.label === label) {
          setSelectedName((prev) => [...prev, item]);
        }
      });
    }
  }

  return (
    <Container>
      <LeftView>
        <Checkbox
          color="black"
          value={checked}
          onValueChange={() => {
            setChecked(!checked);
            handlePrice();
            handleName();
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

export default CheckComponent;
