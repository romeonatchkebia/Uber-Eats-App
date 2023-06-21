import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import AccountCard from "../molecules/cards/AccountCard";
import NewText from "../atoms/NewText";

import * as IMAGES from "../../constants/Images";
import * as COLOR from "../../constants/Colors";
import { User } from "../helpers/UserProvider";
import { accounData } from "../../data/appData";

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

const Account = ({ navigation, route }) => {
  const [data, setData] = useState(accounData);

  const [image, setImage] = useState(false);
  const [nameState, setNameState] = useState(false);

  function handlePress(str) {
    navigation.navigate(str, { reward: "reward" });
  }

  const user = User();

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
            source={image ? route.params.image : IMAGES.UserProfileImage}
          />
          {nameState ? (
            <ProfileName size="large">
              {route.params.name} {route.params.lastName}
            </ProfileName>
          ) : (
            <ProfileName>{user ? user.userName : ""}</ProfileName>
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
