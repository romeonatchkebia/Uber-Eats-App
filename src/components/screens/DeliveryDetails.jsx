import React, { useState } from "react";
import { ScrollView, View, Image, Pressable, Dimensions } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as IMAGES from "../../constants/Images";
import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import DeliveryPickupBtns from "../atoms/DeliveryPickupBtns";
import SectionDevider from "../atoms/SectionDevider";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";
import CheckComponent from "../molecules/CheckComponent";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const TitleView = styled.View``;

const RestTitle = styled(NewText)`
  margin-top: ${height * 0.006}px;
`;

const SwitcherContainer = styled.View`
  background-color: #eeeeee;
  border-radius: ${width * 0.13}px;
  height: ${height * 0.065}px;
  flex-direction: row;
  padding: ${height * 0.006}px;
  margin-top: ${height * 0.023}px;
`;

const SanFrancisco = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${width * 0.041}px;
  margin-top: ${height * 0.023}px;
`;

const TextView = styled.View``;

const SanFranTitle = styled(NewText)``;

const JohnList = styled(NewText)``;

const TimeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${height * 0.023}px;
`;

const Priority = styled.View`
  align-items: center;
  border: 1px solid lightgrey;
  justify-content: space-between;
  flex-direction: row;
  padding: ${height * 0.018}px;
  margin-top: ${height * 0.023}px;
`;

const Standart = styled.View`
  align-items: center;
  border: 2px solid black;
  flex-direction: row;
  padding: ${height * 0.03}px;
  margin-top: ${height * 0.023}px;
`;

const Schedule = styled.View`
  align-items: center;
  border: 1px solid lightgrey;
  flex-direction: row;
  padding: ${height * 0.03}px;
  margin-top: ${height * 0.023}px;
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
  height: ${height * 0.047}px;
`;

const Txt = styled(NewText)``;

const TxtView = styled.View``;

const FoodTitle = styled(NewText)``;

const FoodSubTitle = styled(NewText)``;

const RestTiTle = styled(NewText)`
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

const Left = styled.View`
  flex-direction: row;
  background: #eeeeee;
  justify-content: space-between;
  gap: ${width * 0.065}px;
  padding: ${height * 0.023}px 10px;
`;

const Right = styled.View`
  background: #eeeeee;
  padding: ${height * 0.023}px;
`;

// Hurry

const Cont = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: ${height * 0.012}px ${height * 0.018}px;
  margin: 0 ${height * 0.018}px ${height * 0.018}px;
`;

const TView = styled.View``;

const Ttl = styled(NewText)``;

const SubTitleTxt = styled(NewText)`
  margin-top: ${height * 0.012}px;
`;

const Addview = styled.View``;

const Devider = styled(SectionDevider)`
  height: ${height * 0.006}px;
`;

const DeliveryDetails = ({ navigation, route }) => {
  const [category, setCategory] = useState(0);

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  function handlePress(value) {
    setCategory(value);
  }

  return (
    <Container>
      <ScrollView>
        <View style={{ margin: width * 0.038 }}>
          <TitleView>
            <Pressable
              onPress={() => navigation.goBack(ROUTS.ORDER_SELECTION_SCREEN)}
            >
              <Feather
                name="arrow-left"
                size={width >= 350 ? 26 : 18}
                color="black"
              />
            </Pressable>

            <RestTitle font="bold" size="xxlarge">
              Delivery Details
            </RestTitle>
          </TitleView>

          <SwitcherContainer>
            {btns.map((btn) => {
              return (
                <DeliveryPickupBtns
                  title={btn.title}
                  onPress={() => handlePress(btn.value)}
                  key={btn.title}
                  black={btn.value === category ? true : false}
                />
              );
            })}
          </SwitcherContainer>

          <SanFrancisco>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: width * 0.05,
              }}
            >
              <Ionicons name="location" size={width >= 350 ? 26 : 18} />

              <TextView>
                <SanFranTitle font="medium" size="medium">
                  San Francisco Bay Area
                </SanFranTitle>

                <JohnList color="grey">Ca</JohnList>
              </TextView>
            </View>

            <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
          </SanFrancisco>

          <SanFrancisco>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: width * 0.05,
              }}
            >
              <Ionicons name="person" size={width >= 350 ? 26 : 18} />

              <TextView>
                <SanFranTitle font="medium" size="medium">
                  Meet at the door
                </SanFranTitle>

                <JohnList color="grey">Add delivery note</JohnList>
              </TextView>
            </View>

            <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
          </SanFrancisco>

          <TimeView>
            <NewText size="medium" font="medium">
              Delivery Time
            </NewText>
            <NewText size="medium" font="medium">
              15-30 min(s)
            </NewText>
          </TimeView>

          <Priority>
            <View style={{ gap: height * 0.012 }}>
              <NewText size="medium" font="medium">
                Priority
              </NewText>

              <NewText color="grey">Delivered directly to you</NewText>
            </View>

            <NewText color="grey">+US$1.99</NewText>
          </Priority>

          <Standart>
            <NewText size="medium" font="medium">
              Standart
            </NewText>
          </Standart>

          <Schedule>
            <NewText size="medium" font="medium">
              Schedule
            </NewText>
          </Schedule>

          <TimeView>
            <NewText size="medium" font="medium">
              Your items
            </NewText>

            <NewText size="medium" font="medium" color="green">
              see menu
            </NewText>
          </TimeView>

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

              <RestTiTle font="medium">Ranch Dip</RestTiTle>
            </TxtView>

            <PriceWrapper>
              <IconPriceView>
                <Image source={IMAGES.GreenVector} />

                <NewText font="medium" size="medium">
                  US$13.18
                </NewText>
              </IconPriceView>

              <SubPrice font="medium">US$17.49</SubPrice>
            </PriceWrapper>
          </DetailsView>

          <RenderView>
            <Cont>
              <TView>
                <Ttl font="medium" size="medium">
                  Cantina Crispy Chicken
                </Ttl>

                <SubTitleTxt color="green">
                  Buy 1, get 1 free (add 2 to basket)
                </SubTitleTxt>
              </TView>

              <Addview>
                <Image source={IMAGES.AddPlus} />
              </Addview>
            </Cont>

            <Cont>
              <TView>
                <Ttl font="medium" size="medium">
                  Spicy Cheesy Double
                </Ttl>

                <SubTitleTxt color="green">
                  Buy 1, get 1 free (add 2 to basket)
                </SubTitleTxt>
              </TView>

              <Addview>
                <Image source={IMAGES.AddPlus} />
              </Addview>
            </Cont>

            <Cont>
              <TView>
                <Ttl font="medium" size="medium">
                  Mango Freeze
                </Ttl>

                <SubTitleTxt color="green">
                  Buy 1, get 1 free (add 2 to basket)
                </SubTitleTxt>
              </TView>

              <Addview>
                <Image source={IMAGES.AddPlus} />
              </Addview>
            </Cont>
          </RenderView>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: height * 0.018,
            }}
          >
            <GreyBtnWithIcon title="Add items" img={IMAGES.SmallPlus} />
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

          <SanFrancisco>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: width * 0.05,
              }}
            >
              <Ionicons name="gift" size={width >= 350 ? 26 : 18} />

              <TextView>
                <SanFranTitle font="medium" size="medium">
                  Make it a gift
                </SanFranTitle>

                <JohnList color="grey">Add recipient info and message</JohnList>
              </TextView>
            </View>

            <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
          </SanFrancisco>

          <SanFrancisco>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: width * 0.05,
              }}
            >
              <Ionicons name="pricetag" size={width >= 350 ? 26 : 18} />

              <TextView>
                <SanFranTitle font="medium" size="medium">
                  Promotion applied
                </SanFranTitle>

                <JohnList color="grey">You are saving US$25</JohnList>
              </TextView>
            </View>

            <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
          </SanFrancisco>

          <TimeView>
            <NewText size="medium" font="medium" color="grey">
              Subtotal
            </NewText>
            <NewText size="medium" font="medium" color="green">
              US$19.99
            </NewText>
          </TimeView>

          <TimeView>
            <NewText size="medium" font="medium" color="grey">
              Promotion
            </NewText>
            <NewText size="medium" font="medium" color="green">
              -US$19.99
            </NewText>
          </TimeView>

          <TimeView>
            <NewText size="medium" font="medium" color="grey">
              Delivery fee
            </NewText>
            <NewText size="medium" font="medium" color="green">
              US$0.49
            </NewText>
          </TimeView>

          <TimeView>
            <NewText size="medium" font="medium" color="grey">
              Taxes and Other fees
            </NewText>
            <NewText size="medium" font="medium" color="green">
              US$10.99
            </NewText>
          </TimeView>

          <TimeView>
            <NewText size="medium" font="medium">
              Total
            </NewText>
            <NewText size="medium" font="medium" color="green">
              US$10.71
            </NewText>
          </TimeView>

          <SanFrancisco>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: width * 0.05,
              }}
            >
              <Ionicons name="card" size={width >= 350 ? 26 : 18} />
            </View>

            <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
          </SanFrancisco>
        </View>

        <Devider />

        <View
          style={{
            margin: height * 0.018,
            gap: width * 0.05,
            marginBottom: height * 0.065,
          }}
        >
          <NewText>
            If you're not around when the curier arrives, they'll leave your
            order at the door. By placing your order, you agree to take full
            responsibility for it once it's delivered.
          </NewText>

          <BigBlackGreyBtn
            onPress={() => navigation.navigate(ROUTS.TRACK_ORDER_SCREEN)}
            black
            title="Next • US$10.71"
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default DeliveryDetails;
