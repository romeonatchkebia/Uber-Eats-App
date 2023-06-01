import { Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import DropDownPicker from "react-native-dropdown-picker";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import * as IMAGES from "../../constants/Images";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";
import SectionDevider from "../atoms/SectionDevider";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 15px;
`;

const Title = styled(NewText)`
  font-size: 20px;
  margin-top: 20%;
`;

const DropInput = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
  position: relative;
`;

const InputText = styled.TextInput`
  background: #eeeeee;
  font-size: 20px;
  height: 50px;
  width: 55%;
  padding: 15px 10%;
`;

const DropContainer = styled.View`
  width: 40%;
`;

const Flag = styled(Image)`
  width: 15%;
  left: 5px;
  position: absolute;
`;

const DescText = styled(NewText)`
  margin-top: 20px;
  line-height: 20px;
`;

const LineView = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 15px;
  margin: 20px 0;
`;

const Devider = styled(SectionDevider)`
  background-color: #b4b0b0;
  height: 1px;
  width: 43%;
`;

const Google = styled.View`
  align-items: center;
  border: 1px solid #000000;
  flex-direction: row;
  gap: 70%;
  padding: 15px;
`;

const GoogleText = styled(NewText)``;

const PhoneInput = ({ navigation }) => {
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

  const handleInputChange = (text) => {
    setInput(text);
  };

  return (
    <Container>
      <Wrapper>
        <Title font="medium">Enter your mobile number</Title>

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
              textStyle={{ paddingLeft: 58 }}
            />
          </DropContainer>

          <Flag source={getFlagSource()} />

          <InputText
            placeholder="Mobile number"
            onChangeText={handleInputChange}
          ></InputText>
        </DropInput>

        <BigBlackGreyBtn
          black
          title="Next"
          onPress={() => navigation.navigate("PassInput")}
        />

        <DescText font="medium" color="grey">
          By proceeding, you consent to get calls, Whatsapp or SMS messages,
          including by automated means, from uber and its affiliates to the
          number provided.
        </DescText>

        <LineView>
          <Devider />

          <NewText color="grey">or</NewText>

          <Devider />
        </LineView>

        <Google>
          <Image source={IMAGES.Google} />

          <GoogleText font="bold" size="medium">
            Continue with google
          </GoogleText>
        </Google>
      </Wrapper>
    </Container>
  );
};

export default PhoneInput;
