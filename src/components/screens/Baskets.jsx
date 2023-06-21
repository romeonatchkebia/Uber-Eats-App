import { View, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import * as IMAGES from "../../constants/Images";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";
import CtgrButton from "../atoms/CtgrButton";
import BasketsCard from "../molecules/cards/BasketsCard";
import NewText from "../atoms/NewText";
import { Item } from "../helpers/ItemsProvider";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const OrderBtn = styled(GreyBtnWithIcon)`
  width: 30%;
`;

const CartText = styled(NewText)``;

const ImageSource = IMAGES.BasketMain;

const MainImage = styled.Image`
  margin-top: ${height >= 700 ? "20%" : "5%"};
  width: ${width * 0.45}px;
  height: ${height * 0.2}px;
`;

const Title = styled(NewText)`
  margin-top: ${height * 0.027}px;
`;

const Decription = styled(NewText)`
  text-align: center;
  margin-top: ${width * 0.03}px;
  line-height: ${height * 0.028}px;
`;

const StartShopBtn = styled(CtgrButton)`
  margin-top: ${height * 0.05}px;
  width: 45%;
  height: ${height * 0.053}px;
`;

const pizzaImg = require("../Images/pizza.png");

const Baskets = () => {
  const [data, setData] = useState([]);

  let item = Item();

  setTimeout(() => {
    setData(item);
  }, 1000);

  return (
    <Container>
      <ScrollView>
        <View
          style={{
            alignItems: "flex-end",
            width: "100%",
            padding: width * 0.038,
          }}
        >
          <OrderBtn title="Orders" img={IMAGES.OrderBtnIcon} />
        </View>

        <View
          style={{
            alignItems: "flex-start",
            width: "100%",
            paddingHorizontal: width * 0.038,
          }}
        >
          <CartText size="xxlarge" font="bold">
            Cart
          </CartText>
        </View>

        <View>
          {data.length == 0 ? (
            <View style={{ alignItems: "center" }}>
              <MainImage source={ImageSource} />

              <Title font="medium" size="xlarge">
                Add items to start a basket
              </Title>

              <Decription color="grey" size="medium">
                Once you add items from a restaurant or store, your basket will
                appear here
              </Decription>

              <StartShopBtn title="Start Shopping" black />
            </View>
          ) : (
            data.map((item) => {
              return (
                <BasketsCard
                  title={item.title}
                  imgUrl={pizzaImg}
                  price={item.price}
                  desc={item.desc}
                  key={item.id}
                />
              );
            })
          )}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Baskets;
