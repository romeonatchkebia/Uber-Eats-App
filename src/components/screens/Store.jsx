import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Dimensions } from "react-native";
import styled from "styled-components";
import * as Progress from "react-native-progress";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import Categories from "./Categories";
import PastOrders from "./PastOrders";
import NewText from "../atoms/NewText";
import Featured from "./Featured";
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

const Store = ({ navigation, route }) => {
  const { restName } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(0);

  function handlePress(value) {
    setCategory(value);
  }

  const btns = [
    { title: "Featured", value: 0 },
    { title: "Categories", value: 1 },
    { title: "Orders", value: 2 },
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [category]);

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
                {btns.map((btn) => {
                  return (
                    <CtgrButton
                      title={btn.title}
                      onPress={() => handlePress(btn.value)}
                      key={btn.value}
                      black={btn.value === category ? true : false}
                    />
                  );
                })}
              </CtgrView>

              {category === 1 && <Categories />}
              {category === 2 && <PastOrders />}
              {category === 0 && <Featured navigation={navigation} />}
            </Wrapper>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default Store;
