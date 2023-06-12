import { Image, View, Pressable, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

import * as IMAGES from "../../constants/Images";
import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import SectionDevider from "../atoms/SectionDevider";
import CheckComponent from "../molecules/CheckComponent";
import RadioComponent from "../molecules/RadioComponent";
import BottomSheet from "../atoms/BottomSheet";
import OrderScreenSheetCard from "../molecules/cards/OrderScreenSheetCard";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

// Restaurant details
const RestTiTle = styled(NewText)`
  line-height: ${height * 0.042}px;
  margin-top: ${height * 0.009}px;
`;

const OrderPrice = styled(NewText)`
  margin-top: ${height * 0.009}px;
`;

const OrderDesc = styled(NewText)`
  line-height: ${height * 0.023}px;
  margin-top: ${height * 0.009}px;
`;

// Promotion
const PromotionView = styled.View`
  align-items: center;
  background-color: #e9ffef;
  border-radius: ${width * 0.038}px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${height * 0.033}px;
  padding: ${height * 0.009}px;
`;

const TextView = styled.View``;

const PromoTxt = styled(NewText)`
  margin: ${width * 0.038}px 0 ${width * 0.025}px 0;
`;

const AdviceTxt = styled(NewText)`
  margin-bottom: ${height * 0.006}px;
`;

const IconView = styled.View``;

const ExclaImage = styled.Image`
  width: ${width * 0.065}px;
  height: ${height * 0.029}px;
`;

const Devider = styled(SectionDevider)`
  background: #f6f6f6;
`;

// Radio and check buttons View
const TitleView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.023}px;
`;

const Title = styled(NewText)``;

const RequiredView = styled.View`
  align-items: center;
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  justify-content: center;
  padding: ${height * 0.006}px;
`;

const Required = styled(NewText)``;

const RadioView = styled.View``;

// Counter buttons
const Counter = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: ${width * 0.064}px;
`;

const Minus = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: ${width * 0.13}px;
  height: ${height * 0.06}px;
  width: ${width * 0.13}px;
`;

const Plus = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: ${width * 0.13}px;
  height: ${height * 0.06}px;
  width: ${width * 0.13}px;
`;

// AddButton View
const AddButton = styled.Pressable`
  align-items: center;
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  gap: ${width * 0.025}px;
  padding: ${height * 0.023}px;
  margin: ${width * 0.038}px;
  margin-bottom: 15%;
`;

const AddBtnText = styled(NewText)``;

const LineThroughText = styled(NewText)`
  text-decoration: line-through;
`;

// BottomSheet
const BottomSheetView = styled.View``;

const RestTitleView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: ${height * 0.018}px;
`;

const TextWrapper = styled.View`
  align-items: center;
`;

const SaveText = styled(NewText)`
  margin-top: ${height * 0.006}px;
`;

const GroupIcon = styled.View``;

const SheetDevider = styled(SectionDevider)`
  background: #f6f6f6;
  height: ${height * 0.004}px;
`;

const DetailsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${height * 0.018}px;
`;

const NumberView = styled.View`
  align-items: center;
  background-color: #eeeeee;
  justify-content: center;
  width: ${width * 0.1}px;
  height: ${height * 0.05}px;
`;

const Txt = styled(NewText)``;

const TxtView = styled.View``;

const FoodTitle = styled(NewText)``;

const FoodSubTitle = styled(NewText)``;

const RestTitle = styled(NewText)`
  color: #6b6b6b;
`;

const PriceWrapper = styled.View`
  align-items: flex-end;
`;

const IconPriceView = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${height * 0.006}px;
`;

const SubPrice = styled(NewText)`
  color: #6b6b6b;
  text-decoration: line-through;
`;

const RenderView = styled.View``;

const SubTotal = styled(NewText)``;
const SubtotalPrice = styled(NewText)``;

const Left = styled.View`
  flex-direction: row;
  background: #eeeeee;
  justify-content: space-between;
  gap: ${width * 0.064}px;
  padding: ${height * 0.023}px 10px;
`;

const Right = styled.View`
  background: #eeeeee;
  padding: ${height * 0.023}px;
`;

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

  const [selectedItem, setSelectedItem] = useState([]);

  const { restName, price, desc } = route.params;
  const addedItems = useRef();

  function handleIncrement() {
    setCount(parseFloat(count) + 1);
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(parseFloat(count) - 1);
    }
  }

  useEffect(() => {
    setSum(parseFloat(count) * 8.495 + parseFloat(itemPrice));
  }, [count, itemPrice]);

  return (
    <Container>
      <ScrollView>
        <View style={{ margin: width * 0.038 }}>
          <Pressable
            onPress={() => navigation.navigate(ROUTS.RESTAURANT_DETAILS_SCREEN)}
          >
            <Feather
              name="arrow-left"
              size={width >= 350 ? 26 : 18}
              color="black"
            />
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
              <ExclaImage source={IMAGES.ExclaMark} />
            </IconView>
          </PromotionView>
        </View>

        <Devider />

        <View style={{ margin: width * 0.038 }}>
          <TitleView style={{ marginTop: height * 0.018 }}>
            <Title font="medium" size="large">
              Choose your sauce
            </Title>

            <RequiredView>
              <Required color="grey">Required</Required>
            </RequiredView>
          </TitleView>

          <RadioView>
            <RadioComponent
              arr={sauce}
              setItemPrice={setItemPrice}
              setSelectedItem={setSelectedItem}
            />
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: width * 0.038 }}>
          <TitleView
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: width * 0.013,
              marginTop: height * 0.012,
            }}
          >
            <Title font="medium" size="large">
              Get your sauce on the side
            </Title>

            <NewText color="grey">Choose up to 1</NewText>
          </TitleView>

          <RadioView style={{ marginBottom: height * 0.023 }}>
            {side.map((item) => {
              return (
                <CheckComponent
                  key={item.id}
                  label={item.label}
                  price={item.price}
                  arr={side}
                  setItemPrice={setItemPrice}
                  setSelectedItem={setSelectedItem}
                />
              );
            })}
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: width * 0.038 }}>
          <TitleView style={{ marginTop: height * 0.018 }}>
            <Title font="medium" size="large">
              Choose your size
            </Title>
            <RequiredView>
              <Required color="grey">Required</Required>
            </RequiredView>
          </TitleView>

          <RadioView>
            <RadioComponent
              arr={size}
              setItemPrice={setItemPrice}
              setSelectedItem={setSelectedItem}
            />
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: width * 0.038 }}>
          <TitleView style={{ marginTop: height * 0.018 }}>
            <Title font="medium" size="large">
              Choose your crust
            </Title>
            <RequiredView>
              <Required color="grey">Required</Required>
            </RequiredView>
          </TitleView>

          <RadioView>
            <RadioComponent
              arr={crust}
              setItemPrice={setItemPrice}
              setSelectedItem={setSelectedItem}
            />
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: width * 0.038 }}>
          <TitleView
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: width * 0.013,
              marginTop: height * 0.018,
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
                  arr={adds}
                  setItemPrice={setItemPrice}
                  setSelectedItem={setSelectedItem}
                />
              );
            })}
          </RadioView>
        </View>

        <Devider />

        <View style={{ margin: width * 0.038 }}>
          <TitleView
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: width * 0.013,
              marginTop: height * 0.018,
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
                  arr={freqBroughtTo}
                  subTitle={item.subTitle}
                  setItemPrice={setItemPrice}
                  setSelectedItem={setSelectedItem}
                />
              );
            })}
          </RadioView>
        </View>

        <View style={{ margin: width * 0.038 }}>
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

        <Devider style={{ height: 3, marginTop: height * 0.018 }} />

        <AddButton onPress={() => addedItems.current.open()}>
          <AddBtnText color="white" size="large" font="medium">
            Add {count} to basket • US${sum.toFixed(2)}
          </AddBtnText>

          <LineThroughText color="white" size="large" font="medium">
            US$21.00
          </LineThroughText>
        </AddButton>

        <BottomSheet bottomSheetRef={addedItems} adjustToContentHeight={true}>
          <BottomSheetView>
            <RestTitleView>
              <TextWrapper>
                <RestTiTle font="medium" size="xlarge">
                  Taco Bell(2255 Telegraph Avenue)
                </RestTiTle>

                <SaveText color="green">You're saving US$25</SaveText>
              </TextWrapper>

              <GroupIcon>
                <Image source={IMAGES.GroupImage} />
              </GroupIcon>
            </RestTitleView>

            <SheetDevider />

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

                <FoodSubTitle color="grey">
                  6 Wings • Side of Celery •
                </FoodSubTitle>

                <RestTitle font="medium">Ranch Dip</RestTitle>
              </TxtView>

              <PriceWrapper>
                <IconPriceView>
                  <Image source={IMAGES.GreenVector} />

                  <NewText font="medium" size="medium">
                    US${sum.toFixed(2)}
                  </NewText>
                </IconPriceView>

                <SubPrice font="medium">US$17.49</SubPrice>
              </PriceWrapper>
            </DetailsView>

            <RenderView>
              {selectedItem.map((item) => {
                return (
                  <OrderScreenSheetCard title={item.label} key={item.id} />
                );
              })}
            </RenderView>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: height * 0.018,
              }}
            >
              <SubTotal font="medium" size="medium">
                Subtotal
              </SubTotal>

              <SubtotalPrice font="medium" size="medium">
                US${sum.toFixed(2)}
              </SubtotalPrice>
            </View>

            <View
              style={{
                flexDirection: "row",
                padding: height * 0.018,
                justifyContent: "space-between",
              }}
            >
              <Left>
                <NewText font="medium" size="medium">
                  Request utensils, etc.
                </NewText>

                <CheckComponent />
              </Left>

              <Right>
                <NewText font="medium" size="medium">
                  Add note
                </NewText>
              </Right>
            </View>

            <Pressable
              onPress={() => navigation.navigate(ROUTS.DELIVERY_DETAILS_SCREEN)}
              style={{
                padding: height * 0.023,
                backgroundColor: "black",
                marginHorizontal: width * 0.038,
                alignItems: "center",
                marginTop: height * 0.023,
              }}
            >
              <NewText color="white" font="medium" size="medium">
                Go to Checkout
              </NewText>
            </Pressable>

            <Pressable
              style={{
                padding: height * 0.023,
                backgroundColor: "#eeeeee",
                marginHorizontal: width * 0.038,
                alignItems: "center",
                marginTop: height * 0.023,
              }}
            >
              <NewText font="medium" size="medium">
                Add items
              </NewText>
            </Pressable>
          </BottomSheetView>
        </BottomSheet>
      </ScrollView>
    </Container>
  );
};

export default OrderSelection;
