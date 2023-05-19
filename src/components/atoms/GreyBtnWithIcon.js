import React from "react";
import styled from "styled-components";

import NewText from "./NewText";

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

const BtnText = styled(NewText)`
  line-height: 20px;
`;

const GreyBtnWithIcon = ({ title, img, onPress, ...props }) => {
  return (
    <Button {...props} onPress={onPress}>
      <BtnImage source={img} />
      <BtnText font="medium">{title}</BtnText>
    </Button>
  );
};

export default GreyBtnWithIcon;
