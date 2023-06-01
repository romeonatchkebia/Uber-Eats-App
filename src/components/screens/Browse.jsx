import React, { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import BrowseCard from "../molecules/cards/BrowseCard";
import NewText from "../atoms/NewText";
import * as ROUTES from "../../constants/Routs";

const Container = styled(Screen)``;

// searchbar

const SearchContainer = styled.View`
  flex-direction: row;
  background-color: #eeeeee;
  border-radius: 100px;
  gap: 15px;
  height: 70px;
  padding: 20px;
`;

const InputText = styled.TextInput`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const BrowseCardView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 20px;
  margin-top: 10px;
`;

// categories and cards

const InnerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TopCategories = styled(NewText)`
  margin-top: 10px;
  margin-bottom: 12px;
  margin-left: 30px;
`;

const AllCategories = styled(NewText)`
  margin-top: 6px;
  margin-bottom: 16px;
  margin-left: 30px;
`;

const SearchComponentView = styled.View`
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
`;

const Browse = ({ navigation }) => {
  const topCategoriesList = [
    {
      id: 0,
      title: "Breakfast & brunch",
      imgUrl: require("../Images/browseScreen/topCategories/breakfast-brunch.png"),
    },
    {
      id: 1,
      title: "Coffe & Tea",
      imgUrl: require("../Images/browseScreen/topCategories/coffeTea.png"),
    },
    {
      id: 2,
      title: "Deals",
      imgUrl: require("../Images/browseScreen/topCategories/Deals.png"),
      onPress: () =>
        navigation.navigate(ROUTES.DEALS_SCREEN, { offer: "offer" }),
    },
    {
      id: 3,
      title: "Restaurant Rewards",
      imgUrl: require("../Images/browseScreen/topCategories/RestaurantRewards.png"),
      onPress: () =>
        navigation.navigate(ROUTES.DEALS_SCREEN, { reward: "reward" }),
    },
    {
      id: 4,
      title: "Best Overall",
      imgUrl: require("../Images/browseScreen/topCategories/bestOverall.png"),
    },
    {
      id: 5,
      title: "Shipped free",
      imgUrl: require("../Images/browseScreen/topCategories/shippedFree.png"),
    },
  ];
  const allCategoriesList = [
    {
      id: 0,
      title: "Mexican",
      imgUrl: require("../Images/browseScreen/allCategories/Mexican.png"),
    },
    {
      id: 1,
      title: "Fast Food",
      imgUrl: require("../Images/browseScreen/allCategories/Fastfood.png"),
    },
    {
      id: 2,
      title: "Healthy",
      imgUrl: require("../Images/browseScreen/allCategories/Healthy.png"),
    },
    {
      id: 3,
      title: "Pizza",
      imgUrl: require("../Images/browseScreen/allCategories/Pizza.png"),
    },
    {
      id: 4,
      title: "Asian",
      imgUrl: require("../Images/browseScreen/allCategories/Asian.png"),
    },
    {
      id: 5,
      title: "Bakery",
      imgUrl: require("../Images/browseScreen/allCategories/Bakery.png"),
    },
    {
      id: 6,
      title: "Sandwich",
      imgUrl: require("../Images/browseScreen/allCategories/Sandwich.png"),
    },
    {
      id: 7,
      title: "Sushi",
      imgUrl: require("../Images/browseScreen/allCategories/Sushi.png"),
    },
    {
      id: 8,
      title: "Korean",
      imgUrl: require("../Images/browseScreen/allCategories/korean.png"),
    },
    {
      id: 9,
      title: "Vietnamese",
      imgUrl: require("../Images/browseScreen/allCategories/Vietnamese.png"),
    },
    {
      id: 10,
      title: "Vegan",
      imgUrl: require("../Images/browseScreen/allCategories/Vegan.png"),
    },
    {
      id: 11,
      title: "Bubble Tea",
      imgUrl: require("../Images/browseScreen/allCategories/BubbleTea.png"),
    },
    {
      id: 12,
      title: "Juice & Smothies",
      imgUrl: require("../Images/browseScreen/allCategories/Juice.png"),
    },
    {
      id: 13,
      title: "Fast Food",
      imgUrl: require("../Images/browseScreen/allCategories/Burgers.png"),
    },
  ];

  const [input, setInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const topTitles = topCategoriesList.map((item) => item);
  const allTitles = allCategoriesList.map((item) => item);

  const holeList = [...topTitles, ...allTitles];

  useEffect(() => {
    const item = holeList.filter(
      (item) =>
        item.title.toLowerCase().replace(/\s/g, "") ===
        input.toLowerCase().replace(/\s/g, "")
    );
    setSearchResult(item);

    if (item.length > 0) {
      setShowSearch(true);
    }
  }, [input]);

  const handleInputChange = (text) => {
    setInput(text);
    if (text !== input) {
      setShowSearch(false);
    }
  };

  return (
    <Container>
      <ScrollView>
        <SearchComponentView>
          <SearchContainer>
            <Octicons name="search" size={25} color="black" />

            <InputText
              placeholder="Food, shopping, drinks, etc"
              value={input}
              onChangeText={handleInputChange}
            ></InputText>
          </SearchContainer>

          <BrowseCardView>
            {showSearch &&
              searchResult.map((item) => {
                return (
                  <BrowseCard
                    key={item.id}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    onPress={item.onPress}
                  />
                );
              })}
          </BrowseCardView>
        </SearchComponentView>

        <TopCategories font="medium" size="xlarge">
          Top Categories
        </TopCategories>
        <InnerContainer>
          {topCategoriesList.map((item) => {
            return (
              <BrowseCard
                title={item.title}
                imgUrl={item.imgUrl}
                key={item.id}
                onPress={item.onPress}
              />
            );
          })}
        </InnerContainer>

        <AllCategories font="medium" size="xlarge">
          All Categories
        </AllCategories>
        <InnerContainer style={{ paddingBottom: 80 }}>
          {allCategoriesList.map((item) => {
            return (
              <BrowseCard
                title={item.title}
                imgUrl={item.imgUrl}
                key={item.id}
                onPress={() => console.log(item.title)}
              />
            );
          })}
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};

export default Browse;
