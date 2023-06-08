import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import Checkbox from "expo-checkbox";

import NewText from "../atoms/NewText";

const { height, width } = Dimensions.get("screen");

const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
`;

const LeftView = styled.View`
  flex-direction: row;
`;

const LeftInner = styled.View`
  margin-bottom: ${height * 0.018}px;
  margin-left: ${height * 0.012}px;
`;

const RightView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: ${height * 0.012}px;
`;

const Label = styled(NewText)``;
const Price = styled(NewText)``;

const CheckComponent = ({
  price,
  subTitle,
  label,
  arr,
  setItemPrice,
  setSelectedItem,
}) => {
  const [checked, setChecked] = useState(false);

  function handlePrice() {
    if (checked) {
      setItemPrice((prev) => prev - parseFloat(price));
    } else if (!checked) {
      setItemPrice((prev) => prev + parseFloat(price));
    }
  }

  function handleItem() {
    if (checked) {
      setSelectedItem((prev) => prev.filter((item) => item.label !== label));
    } else if (!checked) {
      arr.forEach((item) => {
        if (item.label === label) {
          setSelectedItem((prev) => [...prev, item]);
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
            handleItem();
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
