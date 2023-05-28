import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../atoms/NewText";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";

const Container = styled(Screen)``;

const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Close = styled.View``;

const Help = styled.View`
  background: #eeeeee;
  border-radius: 50px;
  padding: 7px 16px;
`;

const Title = styled(NewText)`
  margin: 25px 0;
`;

const Desc = styled(NewText)``;

const Delivered = ({ navigation }) => {
  return (
    <Container>
      <View style={{ margin: 15 }}>
        <Header>
          <Close>
            <Image source={IMAGES.Close} />
          </Close>

          <Help>
            <NewText font="medium" size="medium" style={{ padding: 5 }}>
              Help
            </NewText>
          </Help>
        </Header>

        <Title font="medium" size="xlarge">
          Enjoy your order
        </Title>

        <Desc font="medium" size="medium" style={{ marginTop: 20 }}>
          Jonathan and Subway (Worriors Arena Road) worked their magic for you.
          Take a minute to rate, tip, and say thanks.
        </Desc>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "30%",
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
