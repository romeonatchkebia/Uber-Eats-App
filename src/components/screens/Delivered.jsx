import { View, Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import NewText from "../atoms/NewText";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Close = styled.View``;

const Help = styled.View`
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  padding: ${height * 0.008}px ${height * 0.018}px;
`;

const Title = styled(NewText)`
  margin: ${height * 0.029}px 0;
`;

const Desc = styled(NewText)``;

const Delivered = ({ navigation }) => {
  return (
    <Container>
      <View style={{ margin: width * 0.038 }}>
        <Header>
          <Close>
            <Ionicons name="close" size={width >= 350 ? 26 : 18} />
          </Close>

          <Help>
            <NewText
              font="medium"
              size="medium"
              style={{ padding: width * 0.013 }}
            >
              Help
            </NewText>
          </Help>
        </Header>

        <Title font="medium" size="xlarge">
          Enjoy your order
        </Title>

        <Desc font="medium" size="medium" style={{ marginTop: width * 0.05 }}>
          Jonathan and Subway (Worriors Arena Road) worked their magic for you.
          Take a minute to rate, tip, and say thanks.
        </Desc>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: height >= 700 ? "35%" : "18%",
          }}
        >
          <Image source={IMAGES.DeliveryBag} />
        </View>

        <BigBlackGreyBtn
          black
          title="Close"
          onPress={() => navigation.navigate(ROUTS.HOMESCREEN_SCREEN)}
        />
      </View>
    </Container>
  );
};

export default Delivered;
