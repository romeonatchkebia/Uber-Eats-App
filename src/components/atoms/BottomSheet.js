import { View, Text } from "react-native";
import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";
styled;

const Container = styled(Modalize)``;

const BottomSheet = ({ bottomSheetRef, children, ...props }) => {
  return (
    <Container ref={bottomSheetRef} {...props}>
      {children}
    </Container>
  );
};

export default BottomSheet;
