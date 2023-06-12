import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";
styled;

const Container = styled(Modalize)``;

const BottomSheet = ({ bottomSheetRef, children, onPress, ...props }) => {
  return (
    <Container ref={bottomSheetRef} {...props}>
      {children}
    </Container>
  );
};

export default BottomSheet;
