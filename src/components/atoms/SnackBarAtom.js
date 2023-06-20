import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";
import SnackBar from "react-native-snackbar-component";

const { height, width } = Dimensions.get("screen");

const Container = styled.View``;

const SnackBarAtom = ({
  visible,
  textMessage,
  actionText,
  actionHandler,
  ...props
}) => {
  return (
    <Container {...props}>
      <SnackBar
        visible={visible}
        textMessage={textMessage}
        actionHandler={actionHandler}
        actionText={actionText}
        accentColor="black"
        backgroundColor="lightgrey"
        containerStyle={{
          borderRadius: 20,
          height: height * 0.08,
          paddingHorizontal: width * 0.038,
        }}
        messageColor="red"
      />
    </Container>
  );
};

export default SnackBarAtom;
