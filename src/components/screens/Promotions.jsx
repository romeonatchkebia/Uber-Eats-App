import { Dimensions, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import styled from "styled-components";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.033}px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.04}px;
`;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.06}px;
`;

const PromoView = styled.View`
  border: ${width * 0.005}px solid green;
  margin: ${width * 0.05}px 0;
  padding: ${width * 0.038}px;
`;

const BottomView = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.08}px;
  margin-top: ${width * 0.025}px;
`;

const Selected = styled.View`
  align-items: center;
  background: #34a853;
  border-radius: ${width * 0.13}px;
  padding: ${width * 0.05}px ${width * 0.038}px;
  width: 30%;
`;

const Promotions = ({ navigation }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Left>
            <Pressable onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                size={width >= 350 ? 26 : 18}
                color="black"
              />
            </Pressable>

            <NewText size="large">Promotions</NewText>
          </Left>

          <Right>
            <NewText font="medium" color="green">
              Enter code
            </NewText>
          </Right>
        </Header>

        <NewText font="medium" size="xlarge">
          Available promotions
        </NewText>

        <NewText style={{ marginVertical: width * 0.025 }}>
          Limite of one per order
        </NewText>

        <PromoView>
          <NewText font="bold" size="xlarge">
            US$25 off
          </NewText>

          <NewText
            style={{ marginTop: width * 0.025, marginBottom: width * 0.1 }}
            font="medium"
          >
            US$25 minimum order • Delivery orders only
          </NewText>

          <NewText
            style={{ marginVertical: width * 0.025 }}
            color="grey"
            font="medium"
          >
            Use by 29 Jul 2022 8am
          </NewText>

          <BottomView>
            <Selected>
              <NewText color="white" font="medium">
                Selected
              </NewText>
            </Selected>

            <NewText font="medium">Detail</NewText>
          </BottomView>
        </PromoView>
      </Wrapper>
    </Container>
  );
};

export default Promotions;
