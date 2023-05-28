import React, { useState } from "react";
import { ScrollView, View, Image, Pressable } from "react-native";
import styled from "styled-components";

import * as IMAGES from "../../constants/Images";
import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import DeliveryPickupBtns from "../atoms/DeliveryPickupBtns";
import DeliveryDetailsCard from "../molecules/cards/DeliveryDetailsCard";
import SectionDevider from "../atoms/SectionDevider";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";
import CheckComponent from "../molecules/CheckComponent";
import BigBlackGreyBtn from "../atoms/BigBlackGreyBtn";
import Hury from "../molecules/cards/Hury";

const Container = styled(Screen)``;

const TitleView = styled.View``;

const RestTitle = styled(NewText)`
  margin-top: 7px;
`;

const SwitcherContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  height: 55px;
  flex-direction: row;
  padding: 5px;
  margin-top: 20px;
`;

const PinPersonView = styled.View`
  margin-top: 20px;
`;

const TimeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Priority = styled.View`
  align-items: center;
  border: 1px solid lightgrey;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px;
  margin-top: 20px;
`;

const Standart = styled.View`
  align-items: center;
  border: 2px solid black;
  flex-direction: row;
  padding: 25px;
  margin-top: 20px;
`;

const Schedule = styled.View`
  align-items: center;
  border: 1px solid lightgrey;
  flex-direction: row;
  padding: 25px;
  margin-top: 20px;
`;

const DetailsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const NumberView = styled.View`
  align-items: center;
  background-color: #eeeeee;
  justify-content: center;
  width: 40px;
  height: 40px;
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
  gap: 5px;
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
  gap: 25px;
  padding: 20px 10px;
`;

const Right = styled.View`
  background: #eeeeee;
  padding: 20px;
`;

// Hurry

const Cont = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 0 15px 15px;
`;

const TView = styled.View``;

const Ttl = styled(NewText)``;

const SubTitleTxt = styled(NewText)`
  margin-top: 10px;
`;

const Addview = styled.View``;

const Devider = styled(SectionDevider)`
  height: 3px;
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
        <View style={{ margin: 15 }}>
          <TitleView>
            <Pressable
              onPress={() => navigation.goBack(ROUTS.ORDER_SELECTION_SCREEN)}
            >
              <Image source={IMAGES.LeftArrow} />
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

          <PinPersonView>
            <DeliveryDetailsCard
              iconSource={IMAGES.Pin}
              title="San Francisco Bay Area"
              subTitle="Ca"
            />
            <DeliveryDetailsCard
              iconSource={IMAGES.Person}
              title="San Francisco Bay Area"
              subTitle="Add delivery note"
            />
          </PinPersonView>

          <TimeView>
            <NewText size="medium" font="medium">
              Delivery Time
            </NewText>
            <NewText size="medium" font="medium">
              15-30 min(s)
            </NewText>
          </TimeView>

          <Priority>
            <View style={{ gap: 10 }}>
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
              padding: 15,
            }}
          >
            <GreyBtnWithIcon title="Add items" img={IMAGES.SmallPlus} />
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 15,
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

          <PinPersonView>
            <DeliveryDetailsCard
              iconSource={IMAGES.Gift}
              title="San Francisco Bay Area"
              subTitle="Ca"
            />
            <DeliveryDetailsCard
              iconSource={IMAGES.Marks}
              title="San Francisco Bay Area"
              subTitle="Add delivery note"
            />
          </PinPersonView>

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

          <PinPersonView>
            <DeliveryDetailsCard iconSource={IMAGES.CreditCard} />
          </PinPersonView>
        </View>
        <Devider />

        <View style={{ margin: 20 }}>
          <NewText>
            dadjaskjdhaskjdhasjkdhasjkdhasjkdhasjkdhasjkdhasjkdhajskdhakjshdaskjdhakjshdajskdhaskjdhasjkdhajkshdasjdhsakjdhasjkdasdasjhdgajshgdajhsgdajhsgdjhasgdjashgdajs
          </NewText>
        </View>

        <BigBlackGreyBtn
          onPress={() => navigation.navigate(ROUTS.TRACK_ORDER_SCREEN)}
          black
          title="Next • US$10.71"
        />
      </ScrollView>
    </Container>
  );
};

export default DeliveryDetails;
