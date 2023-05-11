import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import * as IMAGES from "../../constants/Images";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";
import CtgrButton from "../atoms/CtgrButton";
import BasketsCard from "../molecules/cards/BasketsCard";

const Container = styled(Screen)`
  align-items: center;
  margin: 15px;
`;

const OrderBtn = styled(GreyBtnWithIcon)`
  width: 30%;
`;

const CartText = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const ImageSource = IMAGES.BasketMain;

const MainImage = styled.Image`
  margin-top: 100px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const Decription = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #545454;
  line-height: 24px;
  text-align: center;
  margin-top: 12px;
`;

const StartShopBtn = styled(CtgrButton)`
  margin-top: 38px;
  width: 40%;
  height: 45px;
`;

const data = [
  {
    id: 0,
    title: "Begs & Megs",
    price: "43.00",
    desc: "Deliver to San Franciscao Bay Area, some more text here, add some text here also",
    imgUrl: require("../Images/BasketsScreen/Rectangle19.png"),
  },
  {
    id: 1,
    title: "Taco Bell",
    price: "45.00",
    desc: "Deliver to California Area",
    imgUrl: require("../Images/BasketsScreen/Rectangle20.png"),
  },
  {
    id: 2,
    title: "Chips",
    price: "28.00",
    desc: "Deliver to Georgia Area, some more text here tooo",
    imgUrl: require("../Images/BasketsScreen/Rectangle19.png"),
  },
  {
    id: 3,
    title: "Cafe La Bondon",
    price: "19.00",
    desc: "Deliver to Los Angeles Bay Area",
    imgUrl: require("../Images/BasketsScreen/Rectangle20.png"),
  },
];

const Baskets = () => {
  const [addItems, setAddItems] = useState(false);

  return (
    <Container>
      <View style={{ alignItems: "flex-end", width: "100%" }}>
        <OrderBtn title="Orders" img={IMAGES.OrderBtnIcon} />
      </View>
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <CartText>Cart</CartText>
      </View>
      {addItems ? (
        data.map((item) => {
          return (
            <BasketsCard
              title={item.title}
              imgUrl={item.imgUrl}
              price={item.price}
              desc={item.desc}
              key={item.id}
            />
          );
        })
      ) : (
        <>
          <MainImage source={ImageSource} />
          <Title>Add items to start a basket</Title>
          <Decription>
            Once you add items from a restaurant or store, your basket will
            appear here
          </Decription>
          <StartShopBtn
            title="Start Shopping"
            black
            onPress={() => setAddItems(true)}
          />
        </>
      )}
    </Container>
  );
};

export default Baskets;
