import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import AccountCard from "../molecules/cards/AccountCard";
import NewText from "../atoms/NewText";

import * as IMAGES from "../../constants/Images";
import * as ROUTES from "../../constants/Routs";
import * as COLOR from "../../constants/Colors";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)`
  background-color: ${COLOR.SCREEN_BACKGROUND};
`;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const ProfileView = styled.View`
  align-items: center;
  gap: ${width * 0.05}px;
  flex-direction: row;
  margin: ${height * 0.023}px 0;
`;

const ProfileFoto = styled.Image`
  width: ${width * 0.12}px;
  height: ${height * 0.054}px;
  border-radius: ${width * 0.13}px;
`;

const ProfileName = styled(NewText)``;

const AboutText = styled(NewText)`
  margin-top: ${height * 0.023}px;
`;

const data = [
  {
    id: 0,
    title: "Orders",
    icon: require("../Images/accountScreen/OrdersIcon.png"),
  },
  {
    id: 1,
    title: "Your favourites",
    icon: require("../Images/accountScreen/FavouritesIcon.png"),
  },
  {
    id: 2,
    title: "Restaurant Rewards",
    icon: require("../Images/accountScreen/RewardsIcon.png"),
    value: ROUTES.DEALS_SCREEN,
  },
  {
    id: 3,
    title: "Wallet",
    icon: require("../Images/accountScreen/WalletIcon.png"),
  },
  {
    id: 4,
    title: "Send a gift",
    icon: require("../Images/accountScreen/GiftIcon.png"),
  },
  {
    id: 5,
    title: "Help",
    icon: require("../Images/accountScreen/HelpIcon.png"),
  },
  {
    id: 6,
    title: "Promotions",
    icon: require("../Images/accountScreen/PromotionsIcon.png"),
  },
  {
    id: 7,
    title: "Deliver with Uber",
    icon: require("../Images/accountScreen/Union.png"),
  },
  {
    id: 8,
    title: "Settings",
    icon: require("../Images/accountScreen/SettingsIcon.png"),
    value: ROUTES.SETTINGS_NAVIGATOR,
  },
];

const Account = ({ navigation, route }) => {
  const [image, setImage] = useState(false);
  const [nameState, setNameState] = useState(false);

  function handlePress(str) {
    navigation.navigate(str, { reward: "reward" });
  }

  useEffect(() => {
    if (route.params !== undefined) {
      setNameState(true);
      setImage(true);
    } else {
      setNameState(false);
    }
  }, [route.params]);

  return (
    <Container>
      <Wrapper>
        <ProfileView>
          <ProfileFoto
            source={image ? route.params.image : IMAGES.AccountProfileImage}
          />
          {nameState ? (
            <ProfileName size="large">
              {route.params.name} {route.params.lastName}
            </ProfileName>
          ) : (
            <ProfileName>John Doe</ProfileName>
          )}
        </ProfileView>

        {data.map((item) => {
          return (
            <AccountCard
              key={item.id}
              title={item.title}
              imgUrl={item.icon}
              onPress={() => handlePress(item.value)}
            />
          );
        })}
        <AboutText size="small">About</AboutText>
      </Wrapper>
    </Container>
  );
};

export default Account;
