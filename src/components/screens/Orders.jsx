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

const TextView = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Orders = ({ navigation, route }) => {
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
                <CtgrButton
                  title="Categories"
                  onPress={() =>
                    navigation.navigate("Categories", { restName })
                  }
                />
                <CtgrButton title="Orders" black={true} />
              </CtgrView>

              <TextView>
                <NewText font="bold" size="medium">
                  No recent orders
                </NewText>

                <NewText size="medium" color="grey">
                  Your recent orders appear here.
                </NewText>
              </TextView>
            </Wrapper>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default Orders;
