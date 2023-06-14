import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, FlatList, Dimensions } from "react-native";
import styled from "styled-components";
import * as Progress from "react-native-progress";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import FeaturedCard from "../molecules/cards/FeaturedCard";
import CtgrButton from "../atoms/CtgrButton";
import { FeaturedList } from "../../data/appData";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

// Header
const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.033}px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.04}px;
`;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.06}px;
`;

// SearchBar
const SearchContainer = styled.View`
  align-items: center;
  background-color: #eeeeee;
  flex-direction: row;
  gap: ${width * 0.038}px;
  height: ${height * 0.052}px;
  padding-left: ${width * 0.035}px;
  margin-bottom: ${width * 0.038}px;
`;

const InputText = styled.TextInput`
  font-weight: 500;
  font-size: ${width * 0.04}px;
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
  gap: ${width * 0.018}px;
`;

const Price = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.018}px;
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
  margin: ${width * 0.05}px 0;
`;

const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SeeAllBtnView = styled.Pressable``;

const SeeAllBtn = styled(NewText)``;

const SectionTitle = styled(NewText)`
  margin: ${width * 0.076}px 0;
`;

const Featured = ({ navigation, route }) => {
  const { restName } = route.params;

  const [data, setData] = useState(FeaturedList);

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
          <Progress.CircleSnail
            size={height >= 700 ? 80 : 50}
            color={["red", "green", "blue"]}
          />
        </SpinnerView>
      ) : (
        <>
          <ScrollView>
            <Wrapper>
              <Header>
                <Left>
                  <Pressable onPress={() => navigation.goBack()}>
                    <Feather
                      name="arrow-left"
                      size={width >= 350 ? 26 : 18}
                      color="black"
                    />
                  </Pressable>

                  <NewText font="medium" size="xlarge">
                    {restName}
                  </NewText>
                </Left>

                <Right>
                  <Ionicons name="person" size={width >= 350 ? 24 : 16} />

                  <Pressable>
                    <Ionicons name="cart" size={width >= 350 ? 26 : 18} />
                  </Pressable>
                </Right>
              </Header>

              <SearchContainer>
                <Octicons
                  name="search"
                  size={height >= 700 ? 20 : 14}
                  color="black"
                />

                <InputText placeholder="Search stores and produ..."></InputText>
              </SearchContainer>

              <TimePrice>
                <Time>
                  <Ionicons name="time" size={width >= 350 ? 26 : 18} />

                  <NewText size="medium">In 60 minutes</NewText>
                </Time>

                <Price>
                  <Ionicons name="logo-bitcoin" size={width >= 350 ? 26 : 18} />

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
                {data[0].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {data[0].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {data[0].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={data[0].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={data[0].data}
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
                {data[1].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {data[1].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {data[1].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={data[1].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={data[1].data}
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
                {data[2].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {data[2].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {data[2].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={data[2].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={data[2].data}
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
                {data[3].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {data[3].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {data[3].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={data[3].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={data[3].data}
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
                {data[4].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {data[4].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {data[4].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={data[4].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={data[4].data}
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
                {data[5].title && (
                  <SectionTitleView>
                    <SectionTitle size="large" font="medium">
                      {data[5].title}
                    </SectionTitle>

                    <SeeAllBtnView>
                      {data[5].title && (
                        <SeeAllBtn
                          font="medium"
                          size="medium"
                          secTitle={data[5].title}
                        >
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={data[5].data}
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
