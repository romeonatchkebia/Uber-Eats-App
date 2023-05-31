import React from "react";
import { Image, Pressable, View, Dimensions } from "react-native";
import styled from "styled-components";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import DeliveryDetailsCard from "../molecules/cards/DeliveryDetailsCard";
import SectionDevider from "../atoms/SectionDevider";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 0 15px;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

const Right = styled.Pressable`
  align-items: center;
  background: #eeeeee;
  border-radius: 50px;
  padding: 5px 15px;
`;

const CardDiv = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const ImgText = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const TextView = styled.View`
  gap: 2px;
`;

const Devide = styled(SectionDevider)`
  height: 2px;
`;

const Time = styled.View`
  flex-direction: row;
  gap: 30px;
  margin-top: 28px;
  margin-bottom: 65%;
`;

const Texts = styled.View`
  gap: 20px;
`;

const GreyText = styled.View`
  background-color: #eeeeee;
  padding: 8px 15px;
  width: ${windowWidth / 1.4}px;
  margin-top: 15px;
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
              <Image source={IMAGES.BoldX} />
            </Pressable>
            <NewText font="medium" size="xlarge">
              Your order
            </NewText>
          </Left>

          <Right>
            <NewText size="medium" style={{ padding: 5 }}>
              Edit
            </NewText>
          </Right>
        </Header>

        <DeliveryDetailsCard
          iconSource={IMAGES.Pin}
          title="San Francisco Bay Area"
          subTitle="John's List"
        />
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
          margin: 15,
          gap: 30,
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
          <Image source={IMAGES.Clock} />

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

        <BigBlackGreyBtn title="Go to Checkout" black />
      </Wrapper>
    </Container>
  );
};

export default OrderDetail;
