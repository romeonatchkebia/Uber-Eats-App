import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import SectionDevider from "../atoms/SectionDevider";
import DealsScreenCard from "../molecules/cards/DealsScreenCard";
import * as COLORS from "../../constants/Colors";
import * as ROUTES from "../../constants/Routs";

const Container = styled(Screen)`
  background: ${COLORS.SCREEN_BACKGROUND};
`;

// header
const HeaderView = styled.View`
  flex-direction: row;
  gap: 150px;
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DealsHeader = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
`;

// buttons
const BtnsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  position: relative;
`;

const BtnBottomBorder = styled.View`
  border: 2px solid black;
  width: 100%;
  position: absolute;
  bottom: -20px;
`;

// Offers
const Offers = styled.Pressable`
  align-items: center;
  width: 50%;
`;

const OfferText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

// Rewards
const Rewards = styled.Pressable`
  align-items: center;
  width: 50%;
`;

const RewardsText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

// title and cards

const BodyContainer = styled.View`
  align-items: center;
`;

const SectionTitle = styled.Text`
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
  margin-left: 35px;
  margin-top: 10px;
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
      <HeaderView>
        <Pressable onPress={() => navigation.navigate(ROUTES.BROWSE_SCREEN)}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
        <DealsHeader>Deals</DealsHeader>
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
            <Ionicons name="pricetag-sharp" size={24} color="black" />
            <OfferText>Offers</OfferText>
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
            <MaterialIcons name="stars" size={26} color="black" />
            <RewardsText>Rewards</RewardsText>
          </View>
          {type === 1 && <BtnBottomBorder />}
        </Rewards>
      </BtnsContainer>
      <SectionDevider />
      {type === 1 ? (
        <SectionTitle>Earn restaurant rewards</SectionTitle>
      ) : (
        <SectionTitle style={{ height: 36 }}></SectionTitle>
      )}
      <BodyContainer>
        <FlatList
          data={type === 0 ? offersList : rewardsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <DealsScreenCard
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
        />
      </BodyContainer>
    </Container>
  );
};

export default Deals;
