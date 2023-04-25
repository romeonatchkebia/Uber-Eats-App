import React from "react";
import { FlatList } from "react-native";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import MainCard from "../organisms/MainCard";

const Data = [
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
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
  {
    id: 4,
    url: require("../Images/mainCardImage3.png"),
    title: "Cardinal Chips",
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
];

const Container = styled(Screen)`
  background: #e5e5e5;
  padding-top: 12px;
`;

const HomeCard = styled(MainCard)``;

function HomeScreen() {
  return (
    <Container>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <HomeCard
            title={item.title}
            source={item.url}
            price={item.price}
            deliveryTime={item.deliveryTime}
            rating={item.rating}
            promoOrdersNum={item.promoOrdersNum}
            promoOrdersPrice={item.promoOrdersPrice}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

export default HomeScreen;
