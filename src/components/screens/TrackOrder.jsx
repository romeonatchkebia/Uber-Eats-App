import { View, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProgressBar } from "react-native-paper";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import NewText from "../atoms/NewText";
import Screen from "../atoms/Screen";
import TrackOrderCard from "../molecules/cards/TrackOrderCard";
import TextInput from "../atoms/TextInput";
import GoogleMap from "../organisms/GoogleMap";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";

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

const Close = styled.View``;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

const Share = styled.View``;

const Help = styled.View`
  background: #eeeeee;
  border-radius: 50px;
  padding: 7px 16px;
`;

const Arriving = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
  margin: 8px 0;
`;

const ProgressView = styled.View``;

const Latest = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
  margin: 8px 0;
`;

const Prepare = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

const CurierView = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 20px;
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
  margin-left: 45px;
`;

const Like = styled.View`
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  flex-direction: row;
  bottom: -18px;
  left: -6px;
  gap: 5px;
  margin-left: 8px;
  padding: 5px 0;
  position: absolute;
  width: 50%;
`;

const Texts = styled.View`
  gap: 3px;
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
        <View style={{ margin: 15 }}>
          <Header>
            <Left>
              <Close>
                <Image source={IMAGES.Close} />
              </Close>
            </Left>

            <Right>
              <Share>
                <Image source={IMAGES.Share} />
              </Share>

              <Help>
                <NewText font="medium">Help</NewText>
              </Help>
            </Right>
          </Header>
        </View>

        <View style={{ margin: 15 }}>
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
              <Image source={IMAGES.Prepare} />
            </Prepare>
          ) : (
            <GoogleMap />
          )}
        </View>

        <View>{progress === 0 && <TrackOrderCard />}</View>

        {progress === 0.5 && (
          <View style={{ margin: 15 }}>
            <CurierView>
              <Images>
                <Person>
                  <Car>
                    <Image source={IMAGES.Car} />
                  </Car>

                  <ProfilePhoto>
                    <Image source={IMAGES.DriverPhoto} />
                  </ProfilePhoto>
                </Person>

                <Like>
                  <NewText>95%</NewText>
                  <Image source={IMAGES.LikeIcon} />
                </Like>
              </Images>

              <Texts>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Image source={IMAGES.ProfileIconGreen} />

                  <NewText color="green" font="medium" size="medium">
                    Jonathan
                  </NewText>

                  <NewText font="medium" size="medium">
                    • 7EL005
                  </NewText>
                </View>
                <NewText>White Honda Civic</NewText>
              </Texts>
            </CurierView>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 20,
                justifyContent: "space-between",
              }}
            >
              <Image source={IMAGES.Call} />
              <TextInput
                placeholder="Send a message"
                style={{
                  borderRadius: 50,
                  width: "55%",
                  height: "70%",
                }}
              />
              <GreyBtnWithIcon
                title="Tip"
                img={IMAGES.PlusWhite}
                style={{ borderRadius: 50, width: "25%", height: "70%" }}
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
