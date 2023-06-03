import {
  View,
  FlatList,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as COLORS from "../../constants/Colors";
import * as ROUTES from "../../constants/Routs";

import Screen from "../atoms/Screen";
import SectionDevider from "../atoms/SectionDevider";
import NewText from "../atoms/NewText";
import MainCard from "../molecules/cards/MainCard";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)`
  background: ${COLORS.SCREEN_BACKGROUND};
`;

// header
const HeaderView = styled.View`
  flex-direction: row;
  gap: ${width * 0.312}px;
  padding: ${width * 0.038}px;
`;

const DealsHeader = styled(NewText)``;

// buttons
const BtnsContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  height: ${height * 0.028}px;
  margin-bottom: ${height * 0.0293}px;
  margin-top: ${height * 0.02}px;
  position: relative;
`;

const BtnBottomBorder = styled.View`
  border: ${width * 0.005}px solid black;
  width: 100%;
  position: absolute;
  bottom: -${height * 0.025}px;
`;

// Offers
const Offers = styled.Pressable`
  align-items: center;
  height: ${height * 0.035}px;
  width: 50%;
`;

const OfferText = styled(NewText)``;

// Rewards
const Rewards = styled.Pressable`
  align-items: center;
  height: ${height * 0.035}px;
  width: 50%;
`;

const RewardsText = styled(NewText)``;

const Devider = styled(SectionDevider)`
  height: ${height * 0.006}px;
`;

// title and cards

const BodyContainer = styled.View`
  margin-bottom: ${height * 0.06}px;
`;

const SectionTitle = styled(NewText)`
  margin-top: ${width * 0.025}px;
  margin-left: ${width * 0.038}px;
  height: ${height * 0.0422}px;
`;

const offersList = [
  {
    id: 1,
    url: require("../Images/mainCardImage.png"),
    title: "Adenine Kitchen",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.3,
    promoOrdersNum: "9",
    promoOrdersPrice: "23",
  },
  {
    id: 2,
    url: require("../Images/mainCardImage1.png"),
    title: "Cardinal Chips",
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
  {
    id: 3,
    url: require("../Images/mainCardImage2.png"),
    title: "Cardinal Chips",
    price: "0.55",
    deliveryTime: "20-45",
    rating: 4.6,
    promoOrdersNum: "3",
    promoOrdersPrice: "7",
  },
  {
    id: 4,
    url: require("../Images/mainCardImage3.png"),
    title: "Cardinal Chips",
    price: "0.25",
    deliveryTime: "20-45",
    rating: 4.6,
  },
];
const rewardsList = [
  {
    id: 1,
    url: require("../Images/mainCardImage1.png"),
    title: "Adenine Kitchen",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.3,
  },
  {
    id: 2,
    url: require("../Images/mainCardImage2.png"),
    title: "Cardinal Chips",
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
  {
    id: 3,
    url: require("../Images/mainCardImage.png"),
    title: "Cardinal Chips",
    price: "0.55",
    deliveryTime: "20-45",
    rating: 4.6,
  },
  {
    id: 4,
    url: require("../Images/mainCardImage2.png"),
    title: "Cardinal Chips",
    price: "0.25",
    deliveryTime: "20-45",
    rating: 4.6,
  },
];

const Deals = ({ navigation, route }) => {
  const params = route.params;

  const [type, setType] = useState(params.offer ? 0 : 1);

  return (
    <Container>
      <ScrollView>
        <HeaderView>
          <Pressable onPress={() => navigation.navigate(ROUTES.BROWSE_SCREEN)}>
            <Feather
              name="arrow-left"
              size={width >= 350 ? 26 : 18}
              color="black"
            />
          </Pressable>

          <DealsHeader size="xlarge">Deals</DealsHeader>
        </HeaderView>

        <BtnsContainer>
          <Offers onPress={() => setType(0)}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Ionicons
                name="pricetag-sharp"
                size={width >= 350 ? 26 : 18}
                color="black"
              />
              <OfferText size="large">Offers</OfferText>
            </View>

            {type === 0 && <BtnBottomBorder />}
          </Offers>

          <Rewards onPress={() => setType(1)}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MaterialIcons
                name="stars"
                size={width >= 350 ? 26 : 18}
                color="black"
              />

              <RewardsText size="large">Rewards</RewardsText>
            </View>
            {type === 1 && <BtnBottomBorder />}
          </Rewards>
        </BtnsContainer>

        <Devider />

        {type === 1 ? (
          <SectionTitle font="medium" size="xlarge">
            Earn restaurant rewards
          </SectionTitle>
        ) : (
          <SectionTitle></SectionTitle>
        )}

        <BodyContainer>
          <FlatList
            data={type === 0 ? offersList : rewardsList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <MainCard
                  title={item.title}
                  rating={item.rating}
                  deliveryTime={item.deliveryTime}
                  price={item.price}
                  promoOrdersNum={item.promoOrdersNum}
                  promoOrdersPrice={item.promoOrdersPrice}
                  source={item.url}
                />
              );
            }}
            scrollEnabled={false}
          />
        </BodyContainer>
      </ScrollView>
    </Container>
  );
};

export default Deals;
