import { View, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import * as IMAGES from "../../../constants/Images";

import NewText from "../../atoms/NewText";
import SectionDevider from "../../atoms/SectionDevider";
import GreyBtnWithIcon from "../../atoms/GreyBtnWithIcon";

const { height, width } = Dimensions.get("screen");

const Container = styled.View``;

const Delivery = styled.View``;

const Devider = styled(SectionDevider)`
  height: ${width * 0.002}px;
`;

const Share = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: ${width * 0.038}px;
`;

const Left = styled.View`
  gap: ${width * 0.013}px;
`;

const GreyBtn = styled(GreyBtnWithIcon)`
  width: 30%;
`;

const Summary = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${height * 0.012}px;
`;

const DetailsView = styled.View`
  flex-direction: row;
  gap: ${width * 0.038}px;
  margin-top: 20px;
`;

const NumberView = styled.View`
  align-items: center;
  background-color: #eeeeee;
  justify-content: center;
  width: ${width * 0.1}px;
  height: ${height * 0.046}px;
`;

const Txt = styled(NewText)``;

const TxtView = styled.View``;

const FoodTitle = styled(NewText)``;

const FoodSubTitle = styled(NewText)``;

const SubTotal = styled(NewText)``;

const SubtotalPrice = styled(NewText)``;

const BurgerImage = styled.Image`
  width: ${width * 0.23}px;
  height: ${height * 0.07}px;
`;

const TrackOrderCard = () => {
  return (
    <Container>
      <Delivery style={{ margin: width * 0.038 }}>
        <NewText
          style={{ marginBottom: width * 0.038, fontSize: width * 0.05 }}
          font="medium"
        >
          Delivery Details
        </NewText>

        <View style={{ gap: width * 0.013, marginVertical: height * 0.012 }}>
          <NewText color="grey">Address</NewText>

          <NewText>Bay Area, San Francisco, California, USA</NewText>
        </View>

        <Devider />

        <View style={{ gap: width * 0.013, marginVertical: height * 0.012 }}>
          <NewText color="grey">Type</NewText>

          <NewText>Leave at door</NewText>
        </View>

        <Devider />

        <View style={{ gap: width * 0.013, marginVertical: height * 0.012 }}>
          <NewText color="grey">Instructions</NewText>

          <NewText>
            Please knock to let me know it has arrive and then leave it at the
            doorstep
          </NewText>
        </View>

        <Devider />

        <View style={{ gap: width * 0.013, marginVertical: height * 0.012 }}>
          <NewText color="grey">Service</NewText>

          <NewText>Standart</NewText>
        </View>
      </Delivery>

      <SectionDevider style={{ height: width * 0.013 }} />

      <Share style={{ margin: width * 0.038 }}>
        <Left>
          <NewText font="medium" size="medium">
            Share this delivery
          </NewText>

          <NewText>Let someone follow along</NewText>
        </Left>

        <GreyBtn title="Share" img={IMAGES.Share} />
      </Share>

      <SectionDevider style={{ height: width * 0.013 }} />

      <View style={{ margin: width * 0.038 }}>
        <Summary>
          <View style={{ gap: width * 0.013 }}>
            <NewText font="medium" size="large">
              Order summary
            </NewText>

            <NewText color="grey">Subway, Warriors Arena Road</NewText>
          </View>

          <NewText color="green">view reciept</NewText>
        </Summary>

        <DetailsView>
          <NumberView>
            <Txt size="medium" font="medium">
              1
            </Txt>
          </NumberView>

          <TxtView>
            <FoodTitle size="medium" font="medium">
              Cantina Crispy Chicken
            </FoodTitle>

            <FoodSubTitle color="grey">Show more</FoodSubTitle>
          </TxtView>
        </DetailsView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: height * 0.023,
          }}
        >
          <SubTotal size="medium">Total</SubTotal>

          <SubtotalPrice size="medium">US$13.18</SubtotalPrice>
        </View>
      </View>

      <SectionDevider style={{ height: width * 0.013 }} />

      <View
        style={{
          margin: width * 0.038,
        }}
      >
        <NewText size="large" font="medium" style={{ marginTop: 20 }}>
          Invite friends
        </NewText>

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginVertical: height * 0.023,
            gap: width * 0.05,
          }}
        >
          <BurgerImage source={IMAGES.BurgerIcon} />

          <NewText color="green" size="medium">
            Invite a friend, get $5 off
          </NewText>
        </View>
      </View>
    </Container>
  );
};

export default TrackOrderCard;
