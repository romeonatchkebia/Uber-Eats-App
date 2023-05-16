import React, { useState, useEffect } from "react";
import { Image, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import SectionDevider from "../atoms/SectionDevider";
import * as ROUTES from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";
import * as COLOR from "../../constants/Colors";
import AccountCard from "../molecules/cards/AccountCard";

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

const SettingsText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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

const UserName = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
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
  left: 0;
  top: 65px;
  height: 20px;
  left: 25px;
  width: 40px;
`;

const AdditAccount = styled.Pressable`
  margin-bottom: 60px;
`;

const AdditAccountText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1d5c2e;
`;

const SavedPlacesView = styled.View`
  align-items: flex-start;
  border: 3px solid #e8e8e8;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

const SavedPlaces = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
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

const OtherOptions = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-left: 15px;
  margin-bottom: 30px;
  margin-top: 40px;
`;

const SignOut = styled.Pressable`
  margin-left: 15px;
`;

const SignOutText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d5c2e;
`;

const Settings = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
  const [nameState, setNameState] = useState(false);

  useEffect(() => {
    if (route.params !== undefined) {
      setNameState(true);
    }
  }, [route.params]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Container>
      <HeaderView>
        <LeftArrow onPress={() => navigation.navigate(ROUTES.ACCOUNT_SCREEN)}>
          <Image source={IMAGES.LeftArrow} />
        </LeftArrow>
        <SettingsText>Settings</SettingsText>
      </HeaderView>

      <ProfileView>
        {image ? (
          <ProfileImage source={{ uri: image }} />
        ) : (
          <ProfileImage source={IMAGES.AccountProfileImage} />
        )}
        {nameState && (
          <UserName>
            {route.params.nameUser} {route.params.lastNameUser}
          </UserName>
        )}
        {!nameState && <UserName>John Doe</UserName>}
        <AdditAccount
          onPress={() => navigation.navigate(ROUTES.EDITACCOUNT_SCREEN)}
        >
          <AdditAccountText>EDIT ACCOUNT</AdditAccountText>
        </AdditAccount>
        <Edit onPress={pickImage}>
          <Text>Edit</Text>
        </Edit>
      </ProfileView>

      <SavedPlacesView>
        <SavedPlaces>Saved places</SavedPlaces>
        <SavedPlacesCard imgUrl={IMAGES.Home} title="Home" />
        <SavedPlacesCard imgUrl={IMAGES.Work} title="Work" />
      </SavedPlacesView>

      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <OtherOptions>Other Options</OtherOptions>
        <SignOut onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)}>
          <SignOutText>Sign Out</SignOutText>
        </SignOut>
      </View>
    </Container>
  );
};

export default Settings;
