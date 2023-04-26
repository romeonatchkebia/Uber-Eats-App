import styled from "styled-components";
import React from "react";

const InputText = styled.TextInput`
  background-color: #edf2f4;
  height: 60px;
  width: 250px;
  border-radius: 10px;
  font-size: 20px;
  padding: 20px;
`;

function TextInput({ label, placeholder, ...props }) {
  return (
    <InputText placeholder={placeholder} {...props}>
      {label}
    </InputText>
  );
}

export default TextInput;
