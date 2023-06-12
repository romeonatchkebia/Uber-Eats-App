import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import ImgPicker from "../molecules/ImgPicker";
import NewText from "../atoms/NewText";
import AccountCard from "../molecules/cards/AccountCard";
import * as ROUTES from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";
import * as COLOR from "../../constants/Colors";
import { User } from "../helpers/UserProvider";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)`
  align-items: center;
  background-color: ${COLOR.SCREEN_BACKGROUND};
`;

const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${width * 0.05}px;
  padding-left: ${width * 0.038}px;
  margin-top: ${height * 0.017}px;
  width: 100%;
`;

const LeftArrow = styled.Pressable``;

const SettingsText = styled(NewText)``;

const ProfileView = styled.View`
  align-items: center;
  margin-top: ${height * 0.041}px;
`;

const ProfileImage = styled.Image`
  height: ${height * 0.1}px;
  width: ${width * 0.23}px;
  border-radius: ${width * 0.13}px;
`;

const UserName = styled(NewText)`
  line-height: ${height * 0.023}px;
  margin: ${height * 0.023}px 0;
`;

const Edit = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #efecec;
  border-radius: ${width * 0.013}px;
  position: absolute;
  top: ${height * 0.076}px;
  height: ${height * 0.023}px;
  left: ${height * 0.023}px;
  width: ${width * 0.1}px;
`;

const EditAccount = styled.Pressable`
  margin-bottom: 18%;
`;

const AdditAccountText = styled(NewText)`
  line-height: ${height * 0.023}px;
`;

const SavedPlacesView = styled.View`
  align-items: flex-start;
  border: ${width * 0.0076}px solid #e8e8e8;
  padding: ${height * 0.023}px 0;
  width: 100%;
`;

const SavedPlaces = styled(NewText)`
  line-height: ${height * 0.023}px;
  margin-left: ${width * 0.038}px;
  margin-bottom: ${height * 0.023}px;
`;

const SavedPlacesCard = styled(AccountCard)`
  align-items: flex-start;
  font-style: normal;
  line-height: ${height * 0.023}px;
`;

const OtherOptions = styled(NewText)`
  line-height: ${height * 0.023}px;
  padding-left: ${width * 0.038}px;
  margin: ${height * 0.035}px 0;
`;

const SignOutText = styled(NewText)`
  margin-left: ${width * 0.038}px;
  line-height: ${height * 0.023}px;
`;

const Settings = ({ navigation, route }) => {
  const [image, setImage] = useState();
  const [nameState, setNameState] = useState(false);

  const user = User();

  useEffect(() => {
    if (route.params !== undefined) {
      setNameState(true);
    }
  }, [route.params]);

  return (
    <Container>
      <HeaderView>
        <LeftArrow
          onPress={() =>
            navigation.navigate(ROUTES.ACCOUNT_SCREEN, {
              image: image && { uri: image },
              name: nameState ? route.params.nameUser : user.userName,
              lastName: nameState ? route.params.lastNameUser : "",
            })
          }
        >
          <Feather
            name="arrow-left"
            size={width >= 350 ? 26 : 18}
            color="black"
          />
        </LeftArrow>

        <SettingsText size="xlarge">Settings</SettingsText>
      </HeaderView>

      <ProfileView>
        <ProfileImage
          source={image ? { uri: image } : IMAGES.UserProfileImage}
        />

        {nameState && (
          <UserName size="large">
            {route.params.nameUser} {route.params.lastNameUser}
          </UserName>
        )}

        {!nameState && <UserName>{user ? user.userName : ""}</UserName>}

        <EditAccount
          onPress={() => navigation.navigate(ROUTES.EDITACCOUNT_SCREEN)}
        >
          <AdditAccountText font="medium" size="medium" color="green">
            EDIT ACCOUNT
          </AdditAccountText>
        </EditAccount>

        <Edit>
          <ImgPicker title="Edit" callback={setImage} />
        </Edit>
      </ProfileView>

      <SavedPlacesView>
        <SavedPlaces size="large">Saved places</SavedPlaces>
        <SavedPlacesCard imgUrl={IMAGES.Home} title="Home" />
        <SavedPlacesCard imgUrl={IMAGES.Work} title="Work" />
      </SavedPlacesView>

      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <OtherOptions size="large">Other Options</OtherOptions>

        <SignOutText
          font="medium"
          size="medium"
          color="green"
          onPress={() => navigation.navigate(ROUTES.LANDING_SCREEN)}
        >
          Sign Out
        </SignOutText>
      </View>
    </Container>
  );
};

export default Settings;
