import React from "react";
import styled from "styled-components";

const Text = styled.Text`
  color: #71908d;
  font-size: 20px;
  margin-top: 38px;
`;

const TextViewer = ({ text }) => {
  return <Text>{text}</Text>;
};

export default TextViewer;
