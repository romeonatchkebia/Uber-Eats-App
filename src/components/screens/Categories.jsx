import React, { useEffect, useState } from "react";
import { Pressable, Image, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import styled from "styled-components";
import { Octicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import CtgrButton from "../atoms/CtgrButton";
import CategoriesScreenCard from "../molecules/cards/CategoriesScreenCard";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 0 15px;
`;

// Header
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

// SearchBar
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

// Time and Price
const TimePrice = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Time = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
`;

const Price = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
`;

// Spinner and Category Btns
const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CtgrView = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 20px 0;
`;

const categories = [
  {
    id: 0,
    title: "Fruits & vegetables",
    imgUrl: require("../Images/categoriesScreen/banana.png"),
  },
  {
    id: 1,
    title: "Beverages",
    imgUrl: require("../Images/categoriesScreen/beverages.png"),
  },
  {
    id: 2,
    title: "Fruits & vegetables",
    imgUrl: require("../Images/categoriesScreen/banana.png"),
  },
  {
    id: 3,
    title: "Pantry & Groceries",
    imgUrl: require("../Images/categoriesScreen/pantry.png"),
  },
  {
    id: 4,
    title: "Snacks",
    imgUrl: require("../Images/categoriesScreen/snack.png"),
  },
  {
    id: 5,
    title: "Meat, Seafood & Plant-Bas...",
    imgUrl: require("../Images/categoriesScreen/meat.png"),
  },
  {
    id: 6,
    title: "Cheese",
    imgUrl: require("../Images/categoriesScreen/cheese.png"),
  },
  {
    id: 7,
    title: "Bread",
    imgUrl: require("../Images/categoriesScreen/bread.png"),
  },
  {
    id: 8,
    title: "Milk",
    imgUrl: require("../Images/categoriesScreen/milk.png"),
  },
  {
    id: 9,
    title: "Canned Products",
    imgUrl: require("../Images/categoriesScreen/canned.png"),
  },
  {
    id: 10,
    title: "Home",
    imgUrl: require("../Images/categoriesScreen/home.png"),
  },
  {
    id: 11,
    title: "Breakfast",
    imgUrl: require("../Images/categoriesScreen/breakfast.png"),
  },
  {
    id: 12,
    title: "Sweets & Chocolates",
    imgUrl: require("../Images/categoriesScreen/sweets.png"),
  },
  {
    id: 13,
    title: "Yogurt",
    imgUrl: require("../Images/categoriesScreen/yogurt.png"),
  },
  {
    id: 14,
    title: "Prepared Foods",
    imgUrl: require("../Images/categoriesScreen/prepared.png"),
  },
];

const Categories = ({ navigation, route }) => {
  const { restName } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <SpinnerView>
          <Progress.CircleSnail size={80} color={["red", "green", "blue"]} />
        </SpinnerView>
      ) : (
        <>
          <ScrollView>
            <Wrapper>
              <Header>
                <Left>
                  <Pressable
                    onPress={() => navigation.goBack(ROUTS.HOMESCREEN_SCREEN)}
                  >
                    <Image source={IMAGES.LeftArrow} />
                  </Pressable>
                  <NewText font="medium" size="xlarge">
                    {restName}
                  </NewText>
                </Left>

                <Right>
                  <Image source={IMAGES.Person} />
                  <Image source={IMAGES.Cart} />
                </Right>
              </Header>

              <SearchContainer>
                <Octicons name="search" size={25} color="black" />

                <InputText placeholder="Search stores and produ..."></InputText>
              </SearchContainer>

              <TimePrice>
                <Time>
                  <Image source={IMAGES.Clock} />
                  <NewText size="medium">In 60 minutes</NewText>
                </Time>

                <Price>
                  <Image source={IMAGES.DolarCoin} />
                  <NewText size="medium">Pricing and Fees</NewText>
                </Price>
              </TimePrice>

              <CtgrView>
                <CtgrButton
                  title="Featured"
                  onPress={() => navigation.navigate("Featured", { restName })}
                />
                <CtgrButton title="Categories" black={true} />
                <CtgrButton
                  title="Orders"
                  onPress={() =>
                    navigation.navigate("PastOrders", { restName })
                  }
                />
              </CtgrView>

              {categories.map((item) => {
                return (
                  <CategoriesScreenCard
                    key={item.id}
                    title={item.title}
                    imgUrl={item.imgUrl}
                  />
                );
              })}
            </Wrapper>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default Categories;
