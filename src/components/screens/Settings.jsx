import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import ImgPicker from "../atoms/ImgPicker";
import NewText from "../atoms/NewText";
import AccountCard from "../molecules/cards/AccountCard";
import * as ROUTES from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";
import * as COLOR from "../../constants/Colors";

const Container = styled(Screen)`
  align-items: center;
  background-color: ${COLOR.SCREEN_BACKGROUND};
`;

const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-left: 15px;
  width: 100%;
`;

const LeftArrow = styled.Pressable``;

const SettingsText = styled(NewText)`
  line-height: 28px;
`;

const ProfileView = styled.View`
  align-items: center;
  margin-top: 35px;
`;

const ProfileImage = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 100px;
`;

const UserName = styled(NewText)`
  line-height: 22px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

const Edit = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #efecec;
  border-radius: 5px;
  position: absolute;
  top: 65px;
  height: 20px;
  left: 20px;
  width: 40px;
`;

const EditAccount = styled.Pressable`
  margin-bottom: 60px;
`;

const AdditAccountText = styled(NewText)`
  line-height: 20px;
`;

const SavedPlacesView = styled.View`
  align-items: flex-start;
  border: 3px solid #e8e8e8;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

const SavedPlaces = styled(NewText)`
  line-height: 22px;
  margin-left: 15px;
  margin-bottom: 20px;
`;

const SavedPlacesCard = styled(AccountCard)`
  align-items: flex-start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-left: -0.5px;
`;

const OtherOptions = styled(NewText)`
  line-height: 22px;
  margin-left: 15px;
  margin-bottom: 30px;
  margin-top: 40px;
`;

const SignOutText = styled(NewText)`
  margin-left: 15px;
  line-height: 24px;
`;

const Settings = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
  const [nameState, setNameState] = useState(false);

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
              name: nameState ? route.params.nameUser : "john",
              lastName: nameState ? route.params.lastNameUser : "Doe",
            })
          }
        >
          <Image source={IMAGES.LeftArrow} />
        </LeftArrow>
        <SettingsText size="xlarge">Settings</SettingsText>
      </HeaderView>

      <ProfileView>
        <ProfileImage
          source={image ? { uri: image } : IMAGES.AccountProfileImage}
        />

        {nameState && (
          <UserName size="large">
            {route.params.nameUser} {route.params.lastNameUser}
          </UserName>
        )}

        {!nameState && <UserName>John Doe</UserName>}

        <EditAccount>
          <AdditAccountText
            font="medium"
            size="medium"
            color="green"
            onPress={() => navigation.navigate(ROUTES.EDITACCOUNT_SCREEN)}
          >
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
          onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)}
        >
          Sign Out
        </SignOutText>
      </View>
    </Container>
  );
};

export default Settings;
