import { Pressable, Dimensions, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import SectionDevider from "../atoms/SectionDevider";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px ${width * 0.038}px 0;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.04}px;
`;

const Deliver = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: ${width * 0.115}px 0 ${width * 0.05}px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.05}px;
`;

const Right = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;

const GreyBtn = styled.View`
  align-items: center;
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  padding: ${width * 0.025}px ${width * 0.04}px;
  width: 50%;
`;

const SearchContainer = styled.View`
  align-items: center;
  background-color: #eeeeee;
  flex-direction: row;
  gap: ${width * 0.038}px;
  height: ${height * 0.052}px;
  padding-left: ${width * 0.035}px;
  margin: ${width * 0.013}px 0 ${width * 0.05}px;
`;

const InputText = styled.TextInput`
  font-weight: 500;
  font-size: ${width * 0.04}px;
`;

const Current = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: ${width * 0.038}px 0 ${width * 0.05}px;
`;

const Devider = styled(SectionDevider)`
  height: ${width * 0.005}px;
`;

const SanFrancisco = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  margin: ${height * 0.023}px 0 ${width * 0.041}px;
  padding: ${width * 0.084}px ${width * 0.038}px;
`;

const California = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${height * 0.023}px 0 ${width * 0.041}px;
  padding: 0 ${width * 0.038}px;
`;

const TextView = styled.View``;

const PenView = styled.View`
  background: #eeeeee;
  border-radius: ${width * 0.13}px;
  padding: ${width * 0.025}px;
`;

const ChangeAddress = ({ navigation }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              size={width >= 350 ? 26 : 18}
              color="black"
            />
          </Pressable>

          <NewText font="medium" size="xlarge">
            Order details
          </NewText>
        </Header>

        <Deliver>
          <Left>
            <MaterialCommunityIcons
              name="clock-time-three"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText font="medium" size="medium">
              Deliver now
            </NewText>
          </Left>

          <Right>
            <GreyBtn>
              <NewText>Shedule</NewText>
            </GreyBtn>
          </Right>
        </Deliver>
      </Wrapper>

      <SectionDevider />

      <Wrapper>
        <SearchContainer>
          <Octicons
            name="search"
            size={height >= 700 ? 20 : 14}
            color="black"
          />

          <InputText placeholder="Enter a new address"></InputText>
        </SearchContainer>

        <NewText font="medium" size="medium">
          Nearby
        </NewText>

        <Current>
          <Left>
            <FontAwesome5
              name="location-arrow"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText font="medium" size="medium">
              Current location
            </NewText>
          </Left>

          <Right>
            <GreyBtn>
              <NewText>Enable</NewText>
            </GreyBtn>
          </Right>
        </Current>
      </Wrapper>

      <Devider />

      <Wrapper>
        <NewText font="medium" size="medium">
          Recent locatins
        </NewText>
      </Wrapper>

      <SanFrancisco>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: width * 0.05,
          }}
        >
          <Ionicons
            name="location-sharp"
            size={width >= 350 ? 26 : 18}
            color="black"
          />

          <TextView>
            <NewText font="medium" size="medium">
              San Francisco Bay Area
            </NewText>

            <NewText color="grey" font="medium" size="medium">
              Ca
            </NewText>
          </TextView>
        </View>

        <Ionicons name="pencil" size={width >= 350 ? 26 : 18} />
      </SanFrancisco>

      <California>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: width * 0.05,
          }}
        >
          <Ionicons
            name="location-sharp"
            size={width >= 350 ? 26 : 18}
            color="black"
          />

          <TextView>
            <NewText font="medium" size="medium">
              California City
            </NewText>

            <NewText color="grey" font="medium" size="medium">
              Ca
            </NewText>
          </TextView>
        </View>

        <PenView>
          <Ionicons name="pencil" size={width >= 350 ? 26 : 18} />
        </PenView>
      </California>
    </Container>
  );
};

export default ChangeAddress;
