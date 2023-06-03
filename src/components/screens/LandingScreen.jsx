import React, { useState, useEffect } from "react";
import { Dimensions, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import Screen from "../atoms/Screen";
import styled from "styled-components";
import ImageViewer from "../atoms/ImageViewer";
import NewText from "../atoms/NewText";
import * as IMAGES from "../../constants/Images";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const LandImage = styled(ImageViewer)`
  width: ${width}px;
  height: ${height >= 700 ? `${height * 0.65}px` : `${height * 0.75}px`};
`;

const LandText = styled(NewText)`
  line-height: ${height * 0.04}px;
  margin: ${height >= 700 ? `${height * 0.01}px` : `${height * 0.03}px`};
`;

const DropInput = styled.View`
  display: flex;
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  gap: 20px;
  margin-top: ${height >= 700 ? `${height * 0.02}px` : `${height * 0.0002}px`};
  padding-left: 8%;
  position: relative;
`;

const LandInput = styled.TextInput`
  background: #eeeeee;
`;

const DropContainer = styled.View`
  width: ${width >= 350 ? `45%` : `50%`};
`;

const Flag = styled(ImageViewer)`
  width: 15%;
  left: 5%;
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
      <Pressable onPress={() => navigation.navigate("BottomTabNav")}>
        <LandImage source={require("../Images/landingScreen.png")} />
      </Pressable>

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
