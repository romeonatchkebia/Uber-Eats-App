import React, { useState, useEffect } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import * as Progress from "react-native-progress";
import * as IMAGES from "../../constants/Images";
import * as ROUTES from "../../constants/Routs";

import RestDetailsCard from "../molecules/cards/RestDetailsCard";
import DeliveryPickupBtns from "../atoms/DeliveryPickupBtns";
import RestDetailsPopularCard from "../molecules/cards/RestDetailsPopularCard";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";
import GoogleMap from "../organisms/GoogleMap";
import { restDetailsData } from "../../data/appData";
import { Item, ItemAdd } from "../helpers/ItemsProvider";

const { height, width } = Dimensions.get("screen");

const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const Navigation = styled.View`
  flex-direction: row;
  top: ${width * 0.05}px;
  justify-content: space-between;
  padding: ${width * 0.038}px;
  position: absolute;
  width: 100%;
`;

const BackArrow = styled.Pressable`
  align-items: center;
  background: #ffffff;
  border-radius: ${width * 0.13}px;
  flex-direction: row;
  justify-content: center;
  padding: ${width * 0.025}px;
`;

const Heart = styled.View`
  align-items: center;
  background: #ffffff;
  border-radius: ${width * 0.13}px;
  flex-direction: row;
  justify-content: center;
  padding: ${width * 0.025}px;
`;

const Dots = styled.View`
  align-items: center;
  background: #ffffff;
  border-radius: ${width * 0.13}px;
  flex-direction: row;
  justify-content: center;
  padding: ${width * 0.025}px;
`;

const MainImageView = styled.View``;

const Pizza = styled.Image`
  height: ${height / 5}px;
  margin-bottom: ${width * 0.013}px;
  width: 100%;
`;

const Map = styled(GoogleMap)`
  height: ${height / 4.5}px;
  width: 100%;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.023}px;
`;

const InfoContainer = styled.View`
  width: 80%;
`;

const RestTiTle = styled(NewText)`
  line-height: ${height * 0.042}px;
`;

const RestInfoView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const RestInfo = styled(NewText)`
  line-height: ${height * 0.023}px;
`;

const WorkingInfo = styled(NewText)`
  line-height: ${height * 0.023}px;
`;

const RightContainer = styled.Pressable`
  justify-content: flex-end;
`;

const ButtonsViewContainer = styled.View`
  margin-top: ${height * 0.023}px;
  justify-content: center;
  gap: ${width * 0.05}px;
`;

const SwitcherContainer = styled.View`
  background-color: #eeeeee;
  border-radius: ${width * 0.13}px;
  height: ${height * 0.065}px;
  flex-direction: row;
  padding: ${height * 0.006}px;
`;

const SectionContainer = styled.View``;

const SectionTitle = styled(NewText)`
  line-height: ${height * 0.042}px;
  margin: ${height * 0.023}px 0;
`;

const BottomSaveView = styled.Pressable`
  align-items: center;
  justify-content: center;
  margin-bottom: ${height * 0.023}px;
`;

const SaveText = styled(NewText)`
  line-height: ${height * 0.023}px;
  text-align: center;
`;

const RestaurantDetails = ({ navigation }) => {
  const [data, setData] = useState(restDetailsData);

  const [category, setCategory] = useState(0);

  function handlePress(value) {
    setCategory(value);
  }

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  function calcRating(num) {
    if (num > 200) {
      return "200+ Rating";
    } else {
      return num;
    }
  }

  let itemArray = Item();

  const itemAdd = ItemAdd();

  const handleItemUpdate = (item) => {
    if (itemArray.length === 0) {
      itemAdd(item);
    } else {
      const existingItem = itemArray.find(
        (existingItem) => existingItem.id === item.id
      );
      if (!existingItem) {
        itemAdd(item);
      }
    }
  };

  const rest = data.restaurant;

  return (
    <Container>
      <ScrollView>
        <MainImageView>
          <Pizza source={IMAGES.RestaurantDetailsPizza} />

          <Navigation>
            <BackArrow onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                size={width >= 350 ? 26 : 18}
                color="black"
              />
            </BackArrow>

            <View style={{ flexDirection: "row", gap: width * 0.038 }}>
              <Heart>
                <Ionicons
                  name="heart-outline"
                  size={width >= 350 ? 26 : 18}
                  color="black"
                />
              </Heart>

              <Dots>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={width >= 350 ? 26 : 18}
                  color="black"
                />
              </Dots>
            </View>
          </Navigation>
        </MainImageView>

        <Map />

        <Wrapper>
          <HeaderContainer>
            <InfoContainer>
              <RestTiTle
                font="bold"
                size="xlarge"
                style={{ marginTop: height * 0.035 }}
              >
                {rest.name}
              </RestTiTle>

              <RestInfoView>
                <View style={{ marginRight: width * 0.0076 }}>
                  <Ionicons name="star" size={width >= 350 ? 26 : 18} />
                </View>

                <RestInfo font="medium" size="medium">
                  {rest.rating}({calcRating(rest.ratingQuantity)}) •{" "}
                  {rest.category} • $$
                </RestInfo>
              </RestInfoView>

              <WorkingInfo color="grey">{rest.workingHours}</WorkingInfo>

              <WorkingInfo color="grey">
                Tap for hours info and more{" "}
              </WorkingInfo>
            </InfoContainer>

            <RightContainer>
              <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
            </RightContainer>
          </HeaderContainer>

          <ButtonsViewContainer>
            <GreyBtnWithIcon title="Group order" img={IMAGES.GroupImage} />

            <SwitcherContainer>
              {btns.map((btn) => {
                return (
                  <DeliveryPickupBtns
                    Time={btn.value === 0 ? rest.deliveryTime : rest.pickupTime}
                    Distance={
                      btn.value === 0
                        ? rest.deliveryDistance
                        : rest.pickupDistance
                    }
                    title={btn.title}
                    onPress={() => handlePress(btn.value)}
                    key={btn.title}
                    black={btn.value === category ? true : false}
                  />
                );
              })}
            </SwitcherContainer>
          </ButtonsViewContainer>

          <SectionContainer>
            <SectionTitle font="bold" size="xlarge">
              Most Popular
            </SectionTitle>

            {data.mostPopular.map((item) => {
              return (
                <RestDetailsCard
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  desc={item.desc}
                  key={item.id}
                  promo={item.promo}
                  onPress={() => {
                    navigation.navigate(ROUTES.ORDER_SELECTION_SCREEN, {
                      ...item,
                      restName: data.restaurant.name,
                    });
                    handleItemUpdate(item);
                  }}
                />
              );
            })}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle font="bold" size="xlarge">
              Picked for you
            </SectionTitle>

            {data.pickedForYou.map((item) => {
              return (
                <RestDetailsCard
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                  key={item.id}
                  itemQuantity={item.itemQuantity}
                />
              );
            })}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle font="bold" size="xlarge">
              Starters
            </SectionTitle>
            {
              <RestDetailsPopularCard
                title={data.starters.title}
                desc={data.starters.desc}
                img={data.starters.img}
                popular={data.starters.popular}
                key={data.starters.id}
              />
            }
          </SectionContainer>

          <SectionContainer>
            <SectionTitle font="bold" size="xlarge">
              Salads
            </SectionTitle>

            {data.salads.map((item) => {
              return (
                <RestDetailsPopularCard
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                  key={item.id}
                  popular={item.popular}
                />
              );
            })}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle font="bold" size="xlarge">
              Our Special Pizza
            </SectionTitle>

            {data.ourSpecialPizza.map((item) => {
              return (
                <RestDetailsPopularCard
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  desc={item.desc}
                  key={item.id}
                  popular={item.popular}
                />
              );
            })}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle font="bold" size="xlarge">
              Miscellaneous{" "}
            </SectionTitle>

            {data.mischelaneous.map((item) => {
              return (
                <RestDetailsPopularCard
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  desc={item.desc}
                  key={item.id}
                  popular={item.popular}
                />
              );
            })}
          </SectionContainer>

          <InfoContainer>
            <RestTiTle style={{ marginBottom: 20 }} font="bold" size="xlarge">
              {data.bottomRestName.restTitle}
            </RestTiTle>

            <RestDetailsCard
              title={data.bottomRestName.title}
              price={data.bottomRestName.price}
              desc={data.bottomRestName.desc}
              key={data.bottomRestName.id}
            />
          </InfoContainer>

          <BottomSaveView onPress={() => navigation.navigate("Promotions")}>
            <SaveText font="medium" size="medium" color="green">
              Save US$25. Conditions Applay.
            </SaveText>
          </BottomSaveView>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default RestaurantDetails;
