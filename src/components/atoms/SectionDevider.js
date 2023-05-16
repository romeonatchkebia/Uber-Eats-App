import React from "react";
import styled from "styled-components";

const Container = styled.View`
  background-color: #e5e5e5;
  height: 10px;
`;

const SectionDevider = ({ ...props }) => {
  return <Container {...props}></Container>;
};

export default SectionDevider;
