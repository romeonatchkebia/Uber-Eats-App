import React from "react";
import { Image, Pressable, View, Dimensions } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import SectionDevider from "../atoms/SectionDevider";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";

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

const Right = styled.Pressable`
  align-items: center;
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  padding: ${width * 0.013}px ${width * 0.038}px;
`;

const SanFrancisco = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${width * 0.041}px;
`;

const SanTextView = styled.View``;

const SanFranTitle = styled(NewText)``;

const JohnList = styled(NewText)``;

const CardDiv = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: ${width * 0.03}px;
  margin-top: ${width * 0.05}px;
  margin-bottom: ${width * 0.013}px;
`;

const ImgText = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.05}px;
`;

const TextView = styled.View`
  gap: ${width * 0.005}px;
`;

const Devide = styled(SectionDevider)`
  height: ${height * 0.0023}px;
`;

const Time = styled.View`
  flex-direction: row;
  gap: ${width * 0.076}px;
  margin-top: ${width * 0.071}px;
  margin-bottom: ${height >= 700 ? "55%" : "20%"};
`;

const Texts = styled.View`
  gap: ${width * 0.05}px;
`;

const GreyText = styled.View`
  background-color: #eeeeee;
  padding: ${width * 0.02}px ${width * 0.038}px;
  width: ${width / 1.4}px;
  margin-top: ${width * 0.038}px;
`;

const BottomWrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const OrderDetail = ({ navigation }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Left>
            <Pressable
              onPress={() => navigation.navigate(ROUTS.GROCERY_SCREEN)}
            >
              <Ionicons name="close" size={width >= 350 ? 26 : 18} />
            </Pressable>

            <NewText font="medium" size="xlarge">
              Your order
            </NewText>
          </Left>

          <Right>
            <NewText size="medium" style={{ padding: width * 0.013 }}>
              Edit
            </NewText>
          </Right>
        </Header>

        <SanFrancisco>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: width * 0.05,
            }}
          >
            <Ionicons name="location" size={width >= 350 ? 26 : 18} />

            <SanTextView>
              <SanFranTitle font="medium" size="medium">
                San Francisco Bay Area
              </SanFranTitle>

              <JohnList color="grey"> John's List</JohnList>
            </SanTextView>
          </View>

          <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
        </SanFrancisco>
      </Wrapper>

      <CardDiv>
        <ImgText>
          <Image source={IMAGES.SafewaySmall} />
          <NewText font="medium" size="medium">
            Safeway
          </NewText>
        </ImgText>

        <NewText font="medium" size="medium">
          $0.27
        </NewText>
      </CardDiv>

      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          margin: width * 0.038,
          gap: width * 0.076,
        }}
      >
        <NewText font="medium" size="medium">
          1 pc
        </NewText>

        <Image source={IMAGES.BananaSmall} />

        <TextView>
          <NewText font="medium" size="medium">
            Organic Banana
          </NewText>

          <NewText size="medium" color="grey">
            $0.27/pc
          </NewText>
        </TextView>
      </View>

      <Devide />

      <Wrapper>
        <Time>
          <Ionicons name="time" size={width >= 350 ? 26 : 18} />

          <Texts>
            <NewText font="medium" size="medium">
              The minimum order amount is $10.00
            </NewText>

            <GreyText>
              <NewText size="medium">
                Add $29.73 more to your order and get your items delivered for
                free
              </NewText>
            </GreyText>
          </Texts>
        </Time>
      </Wrapper>

      <View style={{ margin: width * 0.038 }}>
        <BigBlackGreyBtn title="Go to Checkout" black />
      </View>
    </Container>
  );
};

export default OrderDetail;
