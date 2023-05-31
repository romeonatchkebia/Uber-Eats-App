import { FlatList, Image, Pressable } from "react-native";
import React from "react";
import styled from "styled-components";
import { Octicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import DeliveryDetailsCard from "../molecules/cards/DeliveryDetailsCard";
import GroceryCard from "../molecules/cards/GroceryCard";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 0 15px;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 23px;
`;

const SearchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #eeeeee;
  gap: 15px;
  height: 60px;
  padding: 15px;
  margin-bottom: 15px;
`;

const InputText = styled.TextInput`
  font-weight: 500;
  font-size: 16px;
`;

const stores = [
  {
    id: 0,
    title: "Safeway",
    logo: require("../Images/GroceryScreen/Safewaylogo.png"),
    background: "#F60000",
    time: 60,
  },
  {
    id: 1,
    title: "Andronico's",
    logo: require("../Images/GroceryScreen/Andronico.png"),
    background: "#77A240",
    time: 60,
  },
  {
    id: 2,
    title: "5Elements",
    logo: require("../Images/GroceryScreen/5elementlogo.png"),
    background: "#E4AE3C",
    time: 60,
  },
  {
    id: 3,
    title: "GroceryOutlet",
    logo: require("../Images/GroceryScreen/Groceryoutletlogo.png"),
    background: "#B71234",
    time: 60,
  },
  {
    id: 4,
    title: "Cardenas",
    logo: require("../Images/GroceryScreen/Cardenaslogo.png"),
    background: "#AB0920",
    time: 60,
  },
  {
    id: 5,
    title: "Smart&Finals",
    logo: require("../Images/GroceryScreen/Andronico.png"),
    background: "#D2202F",
    time: false,
  },
];

const Grocery = ({ navigation }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Left>
            <Pressable
              onPress={() => navigation.goBack(ROUTS.HOMESCREEN_SCREEN)}
            >
              <Image source={IMAGES.LeftArrow} />
            </Pressable>
            <NewText font="medium" size="xlarge">
              Stores
            </NewText>
          </Left>

          <Right>
            <Image source={IMAGES.Person} />
            <Pressable
              onPress={() => navigation.navigate(ROUTS.ORDER_DETAIlS_SCREEN)}
            >
              <Image source={IMAGES.Cart} />
            </Pressable>
          </Right>
        </Header>

        <SearchContainer>
          <Octicons name="search" size={25} color="black" />

          <InputText placeholder="Search stores and produ..."></InputText>
        </SearchContainer>

        <DeliveryDetailsCard
          iconSource={IMAGES.Pin}
          title="San Francisco Bay Area"
          subTitle="John's List"
        />

        <FlatList
          data={stores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GroceryCard
              background={item.background}
              time={item.time}
              logo={item.logo}
              onPress={() =>
                navigation.navigate(ROUTS.FEATURED_SCREEN, {
                  restName: item.title,
                })
              }
            />
          )}
          scrollEnabled={false}
          numColumns={2}
        />
      </Wrapper>
    </Container>
  );
};

export default Grocery;
