import React from "react";
import styled from "styled-components";

const BtnImage = styled.Image`
  margin-right: -10px;
`;

const Button = styled.Pressable`
  align-items: center;
  justify-content: space-evenly;
  background-color: #eeeeee;
  flex-direction: row;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 40px;
  height: 50px;
  width: 40%;
`;

const BtnText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const GreyBtnWithIcon = ({ title, img, onPress, ...props }) => {
  return (
    <Button {...props} onPress={onPress}>
      <BtnImage source={img} />
      <BtnText>{title}</BtnText>
    </Button>
  );
};

export default GreyBtnWithIcon;
