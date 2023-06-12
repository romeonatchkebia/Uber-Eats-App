import { View, Image, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import NewText from "../atoms/NewText";
import Screen from "../atoms/Screen";
import TrackOrderCard from "../molecules/cards/TrackOrderCard";
import GoogleMap from "../organisms/GoogleMap";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Left = styled.View`
  align-items: center;
  justify-content: center;
`;

const Close = styled.Pressable``;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.038}px;
`;

const Share = styled.View``;

const Help = styled.View`
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  padding: ${width * 0.018}px ${height * 0.018}px;
`;

const Arriving = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.018}px;
  margin: ${width * 0.02}px 0;
`;

const ProgressView = styled.View``;

const Latest = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.018}px;
  margin: ${width * 0.02}px 0;
`;

const Prepare = styled.View`
  align-items: center;
  justify-content: center;
  margin: ${width * 0.076}px 0;
`;

const MainImage = styled.Image`
  width: ${width * 0.73}px;
  height: ${height * 0.28}px;
`;

const CurierView = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.05}px;
`;

const CarImage = styled.Image`
  width: ${height * 0.12}px;
  height: ${height * 0.066}px;
`;

const DriverImage = styled.Image`
  width: ${height * 0.082}px;
  height: ${height * 0.082}px;
`;

const GreenIcon = styled.Image`
  width: ${width * 0.04}px;
  height: ${height * 0.02}px;
`;

const CallImage = styled.Image`
  width: ${height * 0.05}px;
  height: ${height * 0.05}px;
`;

const Input = styled.TextInput`
  background: #eeeeee;
  height: 100%;
  padding-left: ${width * 0.05}px;
`;

const Images = styled.View``;

const Person = styled.View`
  align-items: center;
  flex-direction: row;
`;
const ProfilePhoto = styled.View`
  position: absolute;
`;

const Car = styled.View`
  margin-left: ${width * 0.114}px;
`;

const Like = styled.View`
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: ${width * 0.05}px;
  flex-direction: row;
  bottom: -${height * 0.02}px;
  left: -${width * 0.018}px;
  gap: ${width * 0.013}px;
  margin-left: ${width * 0.02}px;
  padding: ${width * 0.013}px 0;
  position: absolute;
  width: 50%;
`;

const TextsView = styled.View`
  gap: ${height * 0.0035}px;
`;

const TrackOrder = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 1) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 0.5);
      }, 10000);

      return () => clearTimeout(timer);
    } else if (progress === 1) {
      navigation.navigate(ROUTS.DELIVERED_SCREEN);
    }
  }, [progress, navigation]);

  return (
    <Container>
      <ScrollView>
        <View style={{ margin: width * 0.038 }}>
          <Header>
            <Left>
              <Close onPress={() => navigation.goBack()}>
                <Ionicons name="close" size={width >= 350 ? 26 : 18} />
              </Close>
            </Left>

            <Right>
              <Share>
                <Feather name="share" size={width >= 350 ? 24 : 16} />
              </Share>

              <Help>
                <NewText font="medium">Help</NewText>
              </Help>
            </Right>
          </Header>
        </View>

        <View style={{ margin: width * 0.038 }}>
          {progress === 0 ? (
            <NewText font="medium" size="xlarge">
              Preparing your order...
            </NewText>
          ) : (
            <NewText font="medium" size="xlarge">
              Almost There...
            </NewText>
          )}

          <Arriving>
            <NewText size="medium">Arriving at</NewText>
            <NewText size="medium" font="medium">
              10:15
            </NewText>
          </Arriving>

          <ProgressView>
            <ProgressBar progress={progress} color={"green"} />
          </ProgressView>

          <Latest>
            <NewText>Latest arrival by 10:40</NewText>
            <View>
              <Image source={IMAGES.ExclaMarkGrey} />
            </View>
          </Latest>

          {progress === 0 ? (
            <Prepare>
              <MainImage source={IMAGES.Prepare} />
            </Prepare>
          ) : (
            <GoogleMap />
          )}
        </View>

        {progress === 0.5 && (
          <View style={{ margin: width * 0.038 }}>
            <CurierView>
              <Images>
                <Person>
                  <Car>
                    <CarImage source={IMAGES.Car} />
                  </Car>

                  <ProfilePhoto>
                    <DriverImage source={IMAGES.DriverPhoto} />
                  </ProfilePhoto>
                </Person>

                <Like>
                  <NewText>95%</NewText>

                  <Image source={IMAGES.LikeIcon} />
                </Like>
              </Images>

              <TextsView>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <GreenIcon source={IMAGES.ProfileIconGreen} />

                  <NewText color="green" font="medium" size="medium">
                    Jonathan
                  </NewText>

                  <NewText font="medium" size="medium">
                    • 7EL005
                  </NewText>
                </View>
                <NewText>White Honda Civic</NewText>
              </TextsView>
            </CurierView>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: height * 0.023,
                justifyContent: "space-between",
              }}
            >
              <CallImage source={IMAGES.Call} />

              <Input
                placeholder="Send a message"
                style={{
                  borderRadius: width * 0.13,
                  width: " 55%",
                  // height: height >= 700 ? "70%" : "40%",
                }}
              />
              <GreyBtnWithIcon
                title="Tip"
                img={IMAGES.PlusWhite}
                style={{
                  borderRadius: width * 0.13,
                  width: "25%",
                }}
              />
            </View>
          </View>
        )}
        <TrackOrderCard />
      </ScrollView>
    </Container>
  );
};

export default TrackOrder;
