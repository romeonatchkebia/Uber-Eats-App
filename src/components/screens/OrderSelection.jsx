import { Image, View, Pressable, ScrollView, Platform } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import * as IMAGES from "../../constants/Images";
import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import SectionDevider from "../atoms/SectionDevider";
import CheckComponent from "../molecules/CheckComponent";
import RadioComponent from "../molecules/RadioComponent";
import BottomSheet from "../atoms/BottomSheet";

const Container = styled(Screen)``;

const RestTiTle = styled(NewText)`
  line-height: 36px;
  margin-top: 8px;
`;

const OrderPrice = styled(NewText)`
  margin-top: 8px;
`;

const OrderDesc = styled(NewText)`
  line-height: 20px;
  margin-top: 8px;
`;

const PromotionView = styled.View`
  align-items: center;
  background-color: #e9ffef;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 28px;
  padding: 8px;
`;

const TextView = styled.View``;

const PromoTxt = styled(NewText)`
  margin: 15px 0 10px 0;
`;

const AdviceTxt = styled(NewText)`
  margin-bottom: 5px;
`;

const IconView = styled.View``;

const Devider = styled(SectionDevider)`
  background: #f6f6f6;
`;

const TitleView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled(NewText)``;

const RequiredView = styled.View`
  align-items: center;
  background: #eeeeee;
  border-radius: 99px;
  justify-content: center;
  padding: 5px 6px;
`;

const Required = styled(NewText)``;

const RadioView = styled.View``;

const Counter = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
`;

const Minus = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: 50px;
  height: 50px;
  width: 50px;
`;

const Plus = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: 50px;
  height: 50px;
  width: 50px;
`;

const AddButton = styled.Pressable`
  align-items: center;
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  margin: 15px;
  margin-bottom: ${Platform.OS === "ios" ? 0 : 60}px;
`;

const AddBtnText = styled(NewText)``;

const LineThroughText = styled(NewText)`
  text-decoration: line-through;
`;

const BottomSheetView = styled.View`
  height: 700px;
  align-items: center;
  justify-content: center;
`;

const PriceView = styled.View`
  background-color: #47e0e0;
  border-radius: 20px;
  padding: 10px 30px;
  margin-bottom: 10px;
`;

const TotalPrice = styled(NewText)``;

const sauce = [
  {
    id: 0,
    value: 1,
    label: "Mariana Sauce",
    price: 0,
  },
  {
    id: 1,
    value: 2,
    label: "Garlicky Sauce",
    price: 0,
  },
  {
    id: 2,
    value: 3,
    label: "Pesto Sauce",
    price: 0,
  },
  {
    id: 3,
    value: 4,
    label: "BBQ Sauce",
    price: 0,
  },
  {
    id: 4,
    value: 5,
    label: "Buffalo Sauce",
    price: 0,
  },
];
const size = [
  {
    id: 5,
    value: 6,
    label: "Small 10'' (6 Slices)",
    price: 0,
  },
  {
    id: 6,
    value: 7,
    label: "Medium 12'' (8 Slices)",
    price: "4.00",
  },
  {
    id: 7,
    value: 8,
    label: "Large 14'' (8 Slices)",
    price: "10.00",
  },
  {
    id: 8,
    value: 9,
    label: "Extra large 16'' (12 Slices)",
    price: "15.00",
  },
  {
    id: 9,
    value: 10,
    label: "Super 20'' (12 Slices)",
    price: "18.00",
  },
  {
    id: 10,
    value: 11,
    label: "24''",
    price: "25.00",
  },
];
const crust = [
  {
    id: 11,
    value: 12,
    label: "Regular Crust",
    price: 0,
  },
  {
    id: 12,
    value: 13,
    label: "Corn Skinny Crust",
    price: "4.00",
  },
  {
    id: 13,
    value: 14,
    label: "Thick Pun Crust",
    price: "10.00",
  },
];
const side = [
  {
    id: 14,
    value: 1,
    label: "1 Side of Ranch Dressing",
    price: "0.50",
  },
];
const adds = [
  {
    id: 14,
    value: 1,
    label: "1 Side of Ranch Dressing",
    price: "0.50",
  },
  {
    id: 15,
    value: 1,
    label: "2 Side of Ranch Dressing",
    price: "1.00",
  },
  {
    id: 16,
    value: 1,
    label: "Side of Marinara Sauce",
    price: "0.69",
  },
];
const freqBroughtTo = [
  {
    id: 17,
    value: 1,
    label: "Soda",
    price: "1.69",
    subTitle: "Select options",
  },
  {
    id: 18,
    value: 1,
    label: "Cheeze Pizza",
    price: "12.99",
    subTitle: "Select options",
  },
  {
    id: 19,
    value: 1,
    label: "Amigos Hawaiana Pizza",
    price: "16.99",
    subTitle: "Select options",
  },
];

const OrderSelection = ({ navigation, route }) => {
  const [count, setCount] = useState(1);
  const [sum, setSum] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const { restName, price, desc } = route.params;
  const addedItems = useRef();

  function handleIncrement() {
    setCount(Number(count) + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(Number(count) - 1);
    }
  }

  useEffect(() => {
    setSum(Number(count) * 8.495 + Number(itemPrice));
  }, [count, itemPrice]);

  return (
    <Container>
      <ScrollView>
        <View style={{ margin: 15 }}>
          <Pressable
            onPress={() => navigation.navigate(ROUTS.RESTAURANT_DETAILS_SCREEN)}
          >
            <Image source={IMAGES.LeftArrow} />
          </Pressable>

          <RestTiTle font="bold" size="xlarge">
            {restName}
          </RestTiTle>

          <OrderPrice font="medium" size="large">
            US$ {price}
          </OrderPrice>

          <OrderDesc color="grey">{desc}</OrderDesc>

          <PromotionView>
            <TextView>
              <PromoTxt font="medium" size="medium">
                Promotion applied
              </PromoTxt>
              <AdviceTxt size="medium">
                View basket for final discount
              </AdviceTxt>
            </TextView>

            <IconView>
              <Image source={IMAGES.ExclaMark} />
            </IconView>
          </PromotionView>
        </View>

        <Devider />

        <View style={{ margin: 15 }}>
          <TitleView style={{ marginTop: 15 }}>
            <Title font="medium" size="large">
              Choose your sauce
            </Title>
            <RequiredView>
              <Required color="grey">Required</Required>
            </RequiredView>
          </TitleView>

          <RadioView>
            <RadioComponent arr={sauce} setItemPrice={setItemPrice} />
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: 15 }}>
          <TitleView
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 5,
              marginTop: 10,
            }}
          >
            <Title font="medium" size="large">
              Get your sauce on the side
            </Title>

            <NewText color="grey">Choose up to 1</NewText>
          </TitleView>

          <RadioView style={{ marginBottom: 20 }}>
            {side.map((item) => {
              return (
                <CheckComponent
                  key={item.id}
                  label={item.label}
                  price={item.price}
                  setItemPrice={setItemPrice}
                />
              );
            })}
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: 15 }}>
          <TitleView style={{ marginTop: 15 }}>
            <Title font="medium" size="large">
              Choose your size
            </Title>
            <RequiredView>
              <Required color="grey">Required</Required>
            </RequiredView>
          </TitleView>

          <RadioView>
            <RadioComponent arr={size} setItemPrice={setItemPrice} />
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: 15 }}>
          <TitleView style={{ marginTop: 15 }}>
            <Title font="medium" size="large">
              Choose your crust
            </Title>
            <RequiredView>
              <Required color="grey">Required</Required>
            </RequiredView>
          </TitleView>

          <RadioView>
            <RadioComponent arr={crust} setItemPrice={setItemPrice} />
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: 15 }}>
          <TitleView
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 5,
              marginTop: 10,
            }}
          >
            <Title font="medium" size="large">
              Choose your adds-ons
            </Title>

            <NewText color="grey">Choose up to 3</NewText>
          </TitleView>

          <RadioView>
            {adds.map((item) => {
              return (
                <CheckComponent
                  key={item.id}
                  label={item.label}
                  price={item.price}
                  setItemPrice={setItemPrice}
                />
              );
            })}
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: 15 }}>
          <TitleView
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 5,
              marginTop: 10,
            }}
          >
            <Title font="medium" size="large">
              Get your sauce on the side
            </Title>
          </TitleView>

          <RadioView>
            {freqBroughtTo.map((item) => {
              return (
                <CheckComponent
                  key={item.id}
                  label={item.label}
                  price={item.price}
                  subTitle={item.subTitle}
                  setItemPrice={setItemPrice}
                />
              );
            })}
          </RadioView>
        </View>

        <View style={{ margin: 15 }}>
          <Counter>
            <Minus onPress={handleDecrement}>
              <NewText size="xxlarge">-</NewText>
            </Minus>

            <NewText size="large">{count}</NewText>

            <Plus onPress={handleIncrement}>
              <NewText size="xxlarge">+</NewText>
            </Plus>
          </Counter>
        </View>

        <Devider style={{ height: 3, marginTop: 10 }} />

        <AddButton onPress={() => addedItems.current.open()}>
          <AddBtnText color="white" size="large" font="medium">
            Add {count} to basket • US${sum.toFixed(2)}
          </AddBtnText>

          <LineThroughText color="white" size="large" font="medium">
            US$21.00
          </LineThroughText>
        </AddButton>

        <BottomSheet bottomSheetRef={addedItems} modalHeight={700}>
          <BottomSheetView>
            <PriceView>
              <TotalPrice size="xxlarge">{sum.toFixed(2)}</TotalPrice>
            </PriceView>

            <NewText size="xxlarge">Total price</NewText>
          </BottomSheetView>
        </BottomSheet>
      </ScrollView>
    </Container>
  );
};

export default OrderSelection;
