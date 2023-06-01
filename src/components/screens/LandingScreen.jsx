import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import ImageViewer from "../atoms/ImageViewer";
import NewText from "../atoms/NewText";
import * as IMAGES from "../../constants/Images";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled(Screen)``;

const LandImage = styled(ImageViewer)`
  width: ${windowWidth}px;
  height: ${windowHeight / 1.6}px;
`;

const LandText = styled(NewText)`
  line-height: 36px;
  margin: 15px;
`;

const DropInput = styled.View`
  display: flex;
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  gap: 20px;
  margin-top: 25px;
  padding-left: 30px;
  position: relative;
`;

const LandInput = styled.TextInput`
  background: #eeeeee;
`;

const DropContainer = styled.View`
  width: 40%;
`;

const Flag = styled(ImageViewer)`
  width: 15%;
  left: 30px;
  position: absolute;
`;

const LandingScreen = ({ navigation }) => {
  const [input, setInput] = useState([]);

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

  useEffect(() => {
    if (input.length === 6) {
      navigation.navigate("PhoneInput");
    }
  }, [input]);

  const handleInputChange = (text) => {
    setInput(text);
  };

  return (
    <Container>
      <LandImage source={require("../Images/landingScreen.png")} />
      <LandText size="xlarge" font="medium">
        Use your uber account to get started
      </LandText>

      <DropInput>
        <DropContainer>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: "#EEEEEE",
              borderColor: "#EEEEEE",
              borderRadius: 0,
            }}
            textStyle={{ paddingLeft: 52 }}
          />
        </DropContainer>

        <Flag source={getFlagSource()} />

        <LandInput
          placeholder="232 188 7651"
          onChangeText={handleInputChange}
        ></LandInput>
      </DropInput>
    </Container>
  );
};

export default LandingScreen;
