import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

const { height, width } = Dimensions.get("screen");

const InputText = styled.TextInput`
  background: #eeeeee;
  height: ${height * 0.07}px;
  width: ${width * 0.636}px;
  border-radius: ${height * 0.012}px;
  font-size: ${height * 0.023}px;
  padding: ${height * 0.023}px;
`;

function TextInput({ label, placeholder, ...props }) {
  return (
    <InputText placeholder={placeholder} {...props}>
      {label}
    </InputText>
  );
}

export default TextInput;
