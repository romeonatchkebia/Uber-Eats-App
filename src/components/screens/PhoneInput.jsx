import { Image, Dimensions } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import DropDownPicker from "react-native-dropdown-picker";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import * as IMAGES from "../../constants/Images";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";
import SectionDevider from "../atoms/SectionDevider";
import SnackBarAtom from "../atoms/SnackBarAtom";

import { UserInfo } from "../helpers/UserInfo";
import { UpdateUser } from "../helpers/UserProvider";

const { width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const Title = styled(NewText)`
  margin-top: 15%;
`;

const DropInput = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin-top: ${width * 0.063}px;
  margin-bottom: ${width * 0.076}px;
  position: relative;
`;

const InputText = styled.TextInput`
  background: #eeeeee;
  width: ${width >= 350 ? `50%` : `42%`};
  height: 100%;
  padding: 0 10px;
`;

const DropContainer = styled.View`
  width: ${width >= 350 ? `45%` : `50%`};
`;

const Flag = styled(Image)`
  width: 15%;
  left: 5px;
  position: absolute;
`;

const DescText = styled(NewText)`
  margin-top: ${width * 0.05}px;
  line-height: ${width * 0.05}px;
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
  gap: ${width * 0.18}px;
  padding: ${width * 0.038}px;
`;

const GoogleText = styled(NewText)``;

const SnackBar = styled.View`
  position: relative;
  top: 12%;
`;

const PhoneInput = ({ navigation }) => {
  const [input, setInput] = useState([]);
  const [error, setError] = useState(false);

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

  const updateUser = UpdateUser();

  const userLogin = async () => {
    const res = await UserInfo();

    if (res) {
      updateUser(res);

      if (input == res.mobileNumber) {
        navigation.navigate("PassInput");
      } else if (input !== res.mobileNumber) {
        setError(true);
      }
    }
  };

  const handleInputChange = (text) => {
    setInput(text);
  };

  return (
    <Container>
      <Wrapper>
        <SnackBar>
          <SnackBarAtom
            visible={error}
            textMessage="Mobile Number is not correct"
            actionText="Ok"
            actionHandler={() => setError(false)}
          />
        </SnackBar>

        <Title font="medium" size="xlarge">
          Enter your mobile number
        </Title>

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
              dropDownDirection="TOP"
            />
          </DropContainer>

          <Flag source={getFlagSource()} />

          <InputText
            placeholder="Mobile number"
            onChangeText={handleInputChange}
          ></InputText>
        </DropInput>

        <BigBlackGreyBtn black title="Next" onPress={() => userLogin()} />

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
