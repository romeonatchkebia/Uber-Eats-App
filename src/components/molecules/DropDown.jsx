import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import DropDownPicker from "react-native-dropdown-picker";

const { width } = Dimensions.get("screen");

const DropContainer = styled.View`
  width: ${width * 0.381}px;
`;

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "+44", value: "United Kindom" },
    { label: "+995", value: "Georgia" },
    { label: "+97", value: "France" },
  ]);

  return (
    <DropContainer>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{ backgroundColor: "#F5F5F5", borderColor: "#F5F5F5" }}
        textStyle={{ paddingLeft: 52 }}
      />
    </DropContainer>
  );
};

export default DropDown;
