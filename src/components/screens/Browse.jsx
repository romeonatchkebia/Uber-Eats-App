import React, { useEffect, useState, useRef } from "react";
import { Octicons } from "@expo/vector-icons";
import { ScrollView, Dimensions, TextInput, Pressable } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import BrowseCard from "../molecules/cards/BrowseCard";
import NewText from "../atoms/NewText";
import CategoriesScreenCard from "../molecules/cards/CategoriesScreenCard";
import * as ROUTES from "../../constants/Routs";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
  padding-bottom: 15%;
`;

// searchbar

const SearchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #eeeeee;
  border-radius: ${width * 0.25}px;
  gap: ${width * 0.013}px;
  height: ${height * 0.052}px;
  padding-left: ${height * 0.023}px;
`;

const InputText = styled(TextInput)`
  font-style: normal;
  font-weight: 400;
  font-size: ${width * 0.041}px;
`;

const BrowseCardView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${width * 0.025}px;
  border-radius: ${width * 0.05}px;
  margin-top: ${width * 0.025}px;
`;

// categories and cards

const InnerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TopCategories = styled(NewText)`
  margin-top: ${height * 0.014}px;
  margin-bottom: ${height * 0.014}px;
`;

const AllCategories = styled(NewText)`
  margin-top: ${height * 0.013}px;
  margin-bottom: ${height * 0.019}px;
`;

//Search=true

const RecentView = styled.View`
  margin-top: ${height * 0.014}px;
  margin-bottom: ${height * 0.014}px;
`;

const RecentSearch = styled(NewText)`
  margin-top: ${height * 0.014}px;
  margin-bottom: ${height * 0.014}px;
`;

const TopCatView = styled.View`
  margin-top: ${height * 0.014}px;
  margin-bottom: ${height * 0.014}px;
`;

const TopCatTitle = styled(NewText)`
  margin-top: ${height * 0.014}px;
  margin-bottom: ${height * 0.014}px;
`;

const SearchComponentView = styled.View``;

const Browse = ({ navigation }) => {
  // browseScreen
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
      id: 6,
      title: "Mexican",
      imgUrl: require("../Images/browseScreen/allCategories/Mexican.png"),
    },
    {
      id: 7,
      title: "Fast Food",
      imgUrl: require("../Images/browseScreen/allCategories/Fastfood.png"),
    },
    {
      id: 8,
      title: "Healthy",
      imgUrl: require("../Images/browseScreen/allCategories/Healthy.png"),
    },
    {
      id: 9,
      title: "Pizza",
      imgUrl: require("../Images/browseScreen/allCategories/Pizza.png"),
    },
    {
      id: 10,
      title: "Asian",
      imgUrl: require("../Images/browseScreen/allCategories/Asian.png"),
    },
    {
      id: 11,
      title: "Bakery",
      imgUrl: require("../Images/browseScreen/allCategories/Bakery.png"),
    },
    {
      id: 12,
      title: "Sandwich",
      imgUrl: require("../Images/browseScreen/allCategories/Sandwich.png"),
    },
    {
      id: 13,
      title: "Sushi",
      imgUrl: require("../Images/browseScreen/allCategories/Sushi.png"),
    },
    {
      id: 14,
      title: "Korean",
      imgUrl: require("../Images/browseScreen/allCategories/korean.png"),
    },
    {
      id: 15,
      title: "Vietnamese",
      imgUrl: require("../Images/browseScreen/allCategories/Vietnamese.png"),
    },
    {
      id: 16,
      title: "Vegan",
      imgUrl: require("../Images/browseScreen/allCategories/Vegan.png"),
    },
    {
      id: 17,
      title: "Bubble Tea",
      imgUrl: require("../Images/browseScreen/allCategories/BubbleTea.png"),
    },
    {
      id: 18,
      title: "Juice & Smothies",
      imgUrl: require("../Images/browseScreen/allCategories/Juice.png"),
    },
    {
      id: 19,
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

  // searchScreen
  const [search, setSearch] = useState(false);
  const [recentSearch, setRecentSearch] = useState([""]);
  const textInputRef = useRef(null);

  const handleBlur = () => {
    textInputRef.current.blur();
  };

  const handleRecentSearch = () => {
    if (recentSearch.length === 6) {
      setSearchResult([...recentSearch.pop(), input]);
    }

    if (!recentSearch.includes(input)) {
      setRecentSearch([...recentSearch, input]);
    }
  };

  // browseScreen
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
        <Wrapper>
          <SearchComponentView>
            <SearchContainer>
              {search ? (
                <Feather
                  name="arrow-left"
                  size={height >= 700 ? 20 : 14}
                  color="black"
                  onPress={() => {
                    setSearch(false);
                    handleBlur();
                  }}
                />
              ) : (
                <Octicons
                  name="search"
                  size={height >= 700 ? 20 : 14}
                  color="black"
                />
              )}

              <InputText
                ref={textInputRef}
                placeholder="Food, shopping, drinks, etc"
                value={input}
                onBlur={handleRecentSearch}
                onChangeText={handleInputChange}
                onFocus={() => setSearch(true)}
              />
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

          {search ? (
            <Pressable onPress={() => handleBlur()}>
              {recentSearch.length !== 1 && (
                <RecentView>
                  <RecentSearch color="grey">Recent searches</RecentSearch>

                  {recentSearch.map((item, id) => {
                    return (
                      <CategoriesScreenCard
                        title={item}
                        key={id}
                        icon={
                          <Octicons
                            name="search"
                            size={height >= 700 ? 20 : 14}
                            color="black"
                          />
                        }
                        onPress={() => console.log(item)}
                      />
                    );
                  })}
                </RecentView>
              )}

              <TopCatView>
                <TopCatTitle color="grey">Top Categories</TopCatTitle>

                {holeList.map((item) => {
                  return (
                    <CategoriesScreenCard
                      title={item.title}
                      key={item.id}
                      icon={
                        <Octicons
                          name="search"
                          size={height >= 700 ? 20 : 14}
                          color="black"
                        />
                      }
                      onPress={() => console.log(item.title)}
                    />
                  );
                })}
              </TopCatView>
            </Pressable>
          ) : (
            <Pressable onPress={() => handleBlur()}>
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

              <InnerContainer style={{ paddingBottom: width * 0.2 }}>
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
            </Pressable>
          )}
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default Browse;
