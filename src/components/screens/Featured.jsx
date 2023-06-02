import React, { useEffect, useState } from "react";
import { Pressable, Image, ScrollView, FlatList } from "react-native";
import styled from "styled-components";
import * as Progress from "react-native-progress";
import { Octicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import FeaturedCard from "../molecules/cards/FeaturedCard";
import CtgrButton from "../atoms/CtgrButton";

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

const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SeeAllBtnView = styled.Pressable``;

const SeeAllBtn = styled(NewText)``;

const SectionTitle = styled(NewText)`
  margin: 30px 0 30px;
`;

const FeaturedList = [
  {
    title: "Fruits & Vegetables",
    data: [
      {
        id: 0,
        url: require("../Images/StoreScreen/Banana.png"),
        title: "Organic Banana",
        subTitle: "1 banana",
        price: "0.27",
      },
      {
        id: 1,
        url: require("../Images/StoreScreen/avocado.png"),
        title: "Meium Hass Avocado",
        subTitle: "1 avocado",
        price: "2.21",
      },
      {
        id: 2,
        url: require("../Images/StoreScreen/Banana.png"),
        title: "Organic Banana",
        subTitle: "1 banana",
        price: "0.27",
      },
      {
        id: 3,
        url: require("../Images/StoreScreen/avocado.png"),
        title: "Meium Hass Avocado",
        subTitle: "1 avocado",
        price: "2.21",
      },
    ],
  },
  {
    title: "Beverages",
    data: [
      {
        id: 3,
        url: require("../Images/StoreScreen/cocacola.png"),
        title: "Coca-Cola Zero Sugar Cola Soda",
        subTitle: "12 x 12 fl oz",
        price: "9.89",
      },
      {
        id: 4,
        url: require("../Images/StoreScreen/orangeJuice.png"),
        title: "Simply Pulp Free Orange Juice",
        subTitle: "52 fl oz",
        price: "5.49",
      },
      {
        id: 5,
        url: require("../Images/StoreScreen/cocacola.png"),
        title: "Coca-Cola Zero Sugar Cola Soda",
        subTitle: "12 x 12 fl oz",
        price: "9.89",
      },
      {
        id: 6,
        url: require("../Images/StoreScreen/orangeJuice.png"),
        title: "Simply Pulp Free Orange Juice",
        subTitle: "52 fl oz",
        price: "5.49",
      },
    ],
  },
  {
    title: "Frozen Foods",
    data: [
      {
        id: 6,
        url: require("../Images/StoreScreen/chickenBites.png"),
        title: "T.G.I Friay's Boneless Chicken Bites",
        subTitle: "15 oz",
        price: "10.44",
      },
      {
        id: 7,
        url: require("../Images/StoreScreen/sousages.png"),
        title: "Apple and Maple Froken Sausages",
        subTitle: "55 fl oz",
        price: "7.69",
      },
      {
        id: 8,
        url: require("../Images/StoreScreen/chickenBites.png"),
        title: "T.G.I Friay's Boneless Chicken Bites",
        subTitle: "15 oz",
        price: "10.44",
      },
      {
        id: 7,
        url: require("../Images/StoreScreen/sousages.png"),
        title: "Apple and Maple Froken Sausages",
        subTitle: "55 fl oz",
        price: "7.69",
      },
    ],
  },
  {
    title: "Pantry & Groceries",
    data: [
      {
        id: 9,
        url: require("../Images/StoreScreen/doritos.png"),
        title: "Doritos Nacho Cheese",
        subTitle: "9.3 oz",
        price: "6.15",
      },
      {
        id: 10,
        url: require("../Images/StoreScreen/sousages.png"),
        title: "Wheat Sundried Tomato &...",
        subTitle: "8.5 oz",
        price: "5.49",
      },
      {
        id: 11,
        url: require("../Images/StoreScreen/doritos.png"),
        title: "Doritos Nacho Cheese",
        subTitle: "9.3 oz",
        price: "6.15",
      },
      {
        id: 10,
        url: require("../Images/StoreScreen/sousages.png"),
        title: "Wheat Sundried Tomato &...",
        subTitle: "8.5 oz",
        price: "5.49",
      },
    ],
  },
  {
    title: "Meat Seafood & Plant-Based",
    data: [
      {
        id: 12,
        url: require("../Images/StoreScreen/skinlesschicken.png"),
        title: "Signature Farms Boneless Skinless Chicke...",
        subTitle: "approx 1.5 lbs; p...",
        price: "11.54",
      },
      {
        id: 13,
        url: require("../Images/StoreScreen/turkey.png"),
        title: "Boar's Head Turkey Honey Maple Glazed",
        subTitle: "12 oz",
        price: "7.69",
      },
      {
        id: 14,
        url: require("../Images/StoreScreen/skinlesschicken.png"),
        title: "Signature Farms Boneless Skinless Chicke...",
        subTitle: "approx 1.5 lbs; p...",
        price: "11.54",
      },
      {
        id: 13,
        url: require("../Images/StoreScreen/turkey.png"),
        title: "Boar's Head Turkey Honey Maple Glazed",
        subTitle: "12 oz",
        price: "7.69",
      },
    ],
  },
  {
    title: "Cheese",
    data: [
      {
        id: 15,
        url: require("../Images/StoreScreen/veganCheese.png"),
        title: "Open Nature Vegan non-Dairy",
        subTitle: "8 oz",
        price: "5.49",
      },
      {
        id: 16,
        url: require("../Images/StoreScreen/breecheese.png"),
        title: "Prime Taglio Herb & Garlic Brie Cheese",
        subTitle: "approx 0.5 lb",
        price: "7.70",
      },
      {
        id: 17,
        url: require("../Images/StoreScreen/veganCheese.png"),
        title: "Open Nature Vegan non-Dairy",
        subTitle: "8 oz",
        price: "5.49",
      },
      {
        id: 16,
        url: require("../Images/StoreScreen/breecheese.png"),
        title: "Prime Taglio Herb & Garlic Brie Cheese",
        subTitle: "approx 0.5 lb",
        price: "7.70",
      },
    ],
  },
];

const Featured = ({ navigation, route }) => {
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
                <CtgrButton title="Featured" black={true} />
                <CtgrButton
                  title="Categories"
                  onPress={() =>
                    navigation.navigate("Categories", { restName })
                  }
                />
                <CtgrButton
                  title="Orders"
                  onPress={() =>
                    navigation.navigate("PastOrders", { restName })
                  }
                />
              </CtgrView>

              <>
                {FeaturedList[0].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {FeaturedList[0].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[0].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={FeaturedList[0].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[0].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[1].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {FeaturedList[1].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[1].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={FeaturedList[1].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[1].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[2].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {FeaturedList[2].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[2].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={FeaturedList[2].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[2].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[3].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {FeaturedList[3].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[3].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={FeaturedList[3].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[3].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[4].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {FeaturedList[4].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[4].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={FeaturedList[4].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[4].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[5].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {FeaturedList[5].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[5].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={FeaturedList[5].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[5].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>
            </Wrapper>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default Featured;
