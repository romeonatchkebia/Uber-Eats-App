import React, { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import ImageViewer from "../atoms/ImageViewer";
import TextViewer from "../atoms/TextViewer";
import TextInput from "../atoms/TextInput";
import * as IMAGES from "../../constants/Images";

const Container = styled(Screen)``;

const LandImage = styled(ImageViewer)`
  width: 430px;
  height: 610px;
`;

const LandText = styled(TextViewer)`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-top: 20px;
`;

const DropInput = styled.View`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  flex-direction: row;
  gap: 20px;
  margin-top: 25px;
  padding-left: 30px;
  position: relative;
`;

const LandInput = styled(TextInput)`
  background: #f5f5f5;
`;

const DropContainer = styled.View`
  width: 140px;
`;

const Flag = styled(ImageViewer)`
  width: 50px;
  height: 50px;
  left: 30px;
  position: absolute;
`;

const LandingScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("United Kindom");
  const [items, setItems] = useState([
    { label: "+44", value: "United Kindom" },
    { label: "+995", value: "Georgia" },
    { label: "+33", value: "France" },
  ]);

  const getFlagSource = () => {
    if (value === "United Kindom") {
      return IMAGES.UKFlag;
    } else if (value === "Georgia") {
      return IMAGES.GeFlag;
    } else if (value === "France") {
      return IMAGES.FrFlag;
    }
  };

  return (
    <Container>
      <LandImage source={require("../Images/landingScreen.png")} />
      <LandText text="Use your uber account to get started" />
      <DropInput>
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
        <Flag source={getFlagSource()} />
        <LandInput placeholder="232 188 7651" />
      </DropInput>
    </Container>
  );
};

export default LandingScreen;
