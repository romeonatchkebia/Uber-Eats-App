import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import AccountCard from "../molecules/cards/AccountCard";
import NewText from "../atoms/NewText";

import * as IMAGES from "../../constants/Images";
import * as ROUTES from "../../constants/Routs";
import * as COLOR from "../../constants/Colors";

const Container = styled(Screen)`
  background-color: ${COLOR.SCREEN_BACKGROUND};
`;

const ProfileView = styled.View`
  align-items: center;
  gap: 20px;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

const ProfileFoto = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 100px;
`;

const ProfileName = styled(NewText)``;

const AboutText = styled(NewText)`
  margin-left: 25px;
  margin-top: 20px;
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
      <ScrollView>
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
      </ScrollView>
    </Container>
  );
};

export default Account;
