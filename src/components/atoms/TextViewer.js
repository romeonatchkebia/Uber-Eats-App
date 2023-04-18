import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Text = styled.Text`
  color: #71908d;
  font-size: 20px;
`;

const TextViewer = ({ text, visible, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  if (show) {
    return <Text {...props}>{text}</Text>;
  } else {
    return null;
  }
};

export default TextViewer;
