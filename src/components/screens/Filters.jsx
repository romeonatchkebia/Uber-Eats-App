import { Dimensions, Switch, View, ScrollView } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import SectionDivider from "../atoms/SectionDevider";

const { width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
  padding-bottom: 15%;
`;

const Header = styled.View`
  align-items: center;
  gap: ${width * 0.282}px;
  flex-direction: row;
  margin: ${width * 0.038}px;
`;

const Close = styled.Pressable``;

const Text = styled.View``;

const Devider = styled(SectionDivider)`
  height: ${width * 0.005}px;
`;

const Sort = styled(NewText)`
  margin: ${width * 0.05}px 0;
`;

const SortCard = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.05}px;
  margin: ${width * 0.038}px 0;
`;

const UberEatsCard = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: ${width * 0.038}px 0;
`;

const PriceView = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${width * 0.0865}px;
  margin-bottom: ${width * 0.05}px;
`;

const DollarView = styled.View`
  align-items: center;
  border: 1px solid #000000;
  border-radius: ${width * 0.13}px;
  flex-direction: row;
  justify-content: center;
  height: ${width * 0.14}px;
  margin-top: ${width * 0.025}px;
  width: ${width * 0.14}px;
`;

const Filters = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const [BestOverall, setBestOverall] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const toggleOverall = () => setBestOverall((previousState) => !previousState);

  return (
    <Container>
      <ScrollView>
        <Header>
          <Close onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={width >= 350 ? 26 : 18} />
          </Close>

          <Text>
            <NewText font="medium" size="large">
              All filters
            </NewText>
          </Text>
        </Header>

        <Devider />

        <Wrapper>
          <Sort font="medium" size="large">
            Sort
          </Sort>

          <SortCard>
            <SimpleLineIcons
              name="badge"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Picked for you (default)</NewText>
          </SortCard>

          <SortCard>
            <SimpleLineIcons
              name="fire"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Most popular</NewText>
          </SortCard>

          <SortCard>
            <Ionicons
              name="ios-star-outline"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Rating</NewText>
          </SortCard>

          <SortCard>
            <MaterialCommunityIcons
              name="clock-fast"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Delivery time</NewText>
          </SortCard>

          <Sort font="medium" size="large">
            From Uber eats
          </Sort>

          <UberEatsCard>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: width * 0.038,
              }}
            >
              <Ionicons
                name="md-pricetag"
                size={width >= 350 ? 26 : 18}
                color="black"
              />

              <NewText size="medium">Deals</NewText>
            </View>

            <View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </UberEatsCard>

          <UberEatsCard>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: width * 0.038,
              }}
            >
              <FontAwesome5
                name="medal"
                size={width >= 350 ? 26 : 18}
                color="black"
              />

              <NewText size="medium">Best overall</NewText>
            </View>

            <View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={BestOverall ? "#ffffff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleOverall}
                value={BestOverall}
              />
            </View>
          </UberEatsCard>

          <Sort font="medium" size="large">
            Price range
          </Sort>

          <PriceView>
            <DollarView>
              <NewText>$</NewText>
            </DollarView>

            <DollarView>
              <NewText>$$</NewText>
            </DollarView>

            <DollarView>
              <NewText>$$$</NewText>
            </DollarView>

            <DollarView>
              <NewText>$$$$</NewText>
            </DollarView>
          </PriceView>

          <Sort font="medium" size="large">
            Dietary
          </Sort>

          <SortCard>
            <FontAwesome5
              name="leaf"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Vegetarian</NewText>
          </SortCard>

          <SortCard>
            <FontAwesome5
              name="heartbeat"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Vegen</NewText>
          </SortCard>

          <SortCard>
            <FontAwesome5
              name="seedling"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Gluten-free</NewText>
          </SortCard>

          <SortCard>
            <MaterialCommunityIcons
              name="food-halal"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Halal</NewText>
          </SortCard>

          <SortCard>
            <MaterialCommunityIcons
              name="hospital-box"
              size={width >= 350 ? 26 : 18}
              color="black"
            />

            <NewText size="medium">Allergy friendly</NewText>
          </SortCard>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default Filters;
