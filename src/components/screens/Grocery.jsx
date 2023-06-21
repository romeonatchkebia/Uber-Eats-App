import { FlatList, Pressable, Dimensions, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import GroceryCard from "../molecules/cards/GroceryCard";
import { groceryStores } from "../../data/appData";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

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

const SanFrancisco = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${width * 0.041}px;
`;

const TextView = styled.View``;

const SanFranTitle = styled(NewText)``;

const JohnList = styled(NewText)``;

const Grocery = ({ navigation }) => {
  const [stores, setStores] = useState(groceryStores);

  return (
    <Container>
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
              Stores
            </NewText>
          </Left>

          <Right>
            <Ionicons name="person" size={width >= 350 ? 24 : 16} />

            <Pressable
              onPress={() => navigation.navigate(ROUTS.ORDER_DETAIlS_SCREEN)}
            >
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

              <JohnList color="grey"> John's List</JohnList>
            </TextView>
          </View>

          <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
        </SanFrancisco>

        <FlatList
          data={stores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GroceryCard
              background={item.background}
              time={item.time}
              logo={item.logo}
              onPress={() =>
                navigation.navigate(ROUTS.STORE_SCREEN, {
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
