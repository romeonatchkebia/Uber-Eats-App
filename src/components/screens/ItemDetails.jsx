import { Pressable, Image, Dimensions, View, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import SectionDivider from "../atoms/SectionDevider";
import ItemDetailsCard from "../molecules/cards/ItemDetailsCard";
import ImageViewer from "../atoms/ImageViewer";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${width * 0.07}px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.04}px;
`;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.058}px;
`;

const ImageView = styled.View`
  align-items: center;
  justify-content: center;
`;

const ImageSize = styled(Image)`
  height: ${height * 0.235}px;
  width: ${width * 0.5}px;
`;

const InformView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NutritionFacts = styled.View`
  background: #efeff4;
  padding: ${width * 0.025}px;
`;

const Devider = styled(SectionDivider)`
  height: ${height * 0.0035}px;
  margin: ${width * 0.013}px 0;
`;

const Related = styled(NewText)`
  margin-top: ${height * 0.025}px;
  margin-bottom: ${width * 0.025}px;
`;

const RelatedImages = styled.View`
  flex-direction: row;
  gap: ${width * 0.025}px;
`;

const RelatedImg = styled(ImageViewer)`
  height: ${height * 0.1}px;
  width: ${width * 0.224}px;
`;

const BottomView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Add = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.025}px;
  margin-top: ${height * 0.047}px;
  margin-bottom: ${height * 0.047}px;
`;

const Note = styled.Pressable`
  align-items: center;
  flex-direction: row;
  gap: ${width * 0.025}px;
`;

const MinusPlus = styled.View`
  align-items: center;
  flex-direction: row;
  border: ${height * 0.0035}px solid lightgray;
  gap: ${height * 0.047}px;
  padding: ${width * 0.013}px ${width * 0.025}px;
`;

const MinusImg = styled(ImageViewer)`
  width: ${width * 0.04}px;
`;

const PlusImg = styled(ImageViewer)`
  height: ${height * 0.028}px;
  width: ${width * 0.06}px;
`;

const nutritionFacts = [
  {
    id: 0,
    title: "Total Fat",
    gr: "0g",
    percent: "0%",
  },
  {
    id: 1,
    title: "Saturated Fat",
    gr: "0g",
    percent: "0%",
  },
  {
    id: 2,
    title: "Total carbohydrate",
    gr: "30g",
    percent: "10%",
  },
  {
    id: 3,
    title: "Dietary Fiber",
    gr: "3g",
    percent: "10%",
  },
  {
    id: 4,
    title: "Sugars",
    gr: "19g",
    percent: false,
  },
  {
    id: 5,
    title: "Protain",
    gr: "1g",
    percent: false,
  },
  {
    id: 6,
    title: "Potassium",
    gr: false,
    percent: "15%",
  },
  {
    id: 7,
    title: "Calcium",
    gr: false,
    percent: "0%",
  },
  {
    id: 8,
    title: "Iron",
    gr: false,
    percent: "2%",
  },
  {
    id: 9,
    title: "Vitamin A",
    gr: false,
    percent: "2%",
  },
  {
    id: 10,
    title: "Vitamin C",
    gr: false,
    percent: "15%",
  },
];

const ItemDetails = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <Container>
      <ScrollView>
        <Wrapper>
          <Header>
            <Left>
              <Pressable
                onPress={() => navigation.goBack(ROUTS.HOMESCREEN_SCREEN)}
              >
                <Ionicons name="close" size={width >= 350 ? 26 : 18} />
              </Pressable>
            </Left>

            <Right>
              <Ionicons name="cart" size={width >= 350 ? 26 : 18} />
            </Right>
          </Header>

          <ImageView>
            <ImageSize source={item.url} />
          </ImageView>

          <View style={{ gap: width * 0.025, marginTop: width * 0.05 }}>
            <NewText font="bold" size="xlarge">
              {item.title}
            </NewText>

            <NewText
              font="medium"
              size="medium"
              style={{ marginVertical: width * 0.05 }}
            >
              Information
            </NewText>

            <InformView>
              <NewText font="medium" size="medium" color="grey">
                Price
              </NewText>

              <NewText font="medium" size="medium">
                ${item.price}/pc
              </NewText>
            </InformView>

            <InformView>
              <NewText font="medium" size="medium" color="grey">
                Price per ground
              </NewText>

              <NewText font="medium" size="medium">
                $1.09/lb
              </NewText>
            </InformView>

            <InformView>
              <NewText font="medium" size="medium" color="grey">
                Package
              </NewText>

              <NewText font="medium" size="medium">
                {item.subTitle}
              </NewText>
            </InformView>

            <NewText
              font="medium"
              size="medium"
              style={{ marginVertical: width * 0.05 }}
            >
              Nutrition facts
            </NewText>

            <NutritionFacts>
              <NewText
                font="medium"
                size="medium"
                style={{ marginVertical: width * 0.025 }}
              >
                Serving Size about {item.subTitle}
              </NewText>

              <InformView>
                <NewText font="medium" size="medium">
                  Calories 110
                </NewText>

                <NewText font="medium" size="medium">
                  % Daily Value
                </NewText>
              </InformView>

              <Devider />

              {nutritionFacts.map((item) => {
                return (
                  <ItemDetailsCard
                    key={item.id}
                    title={item.title}
                    weight={item.gr}
                    percent={item.percent}
                  />
                );
              })}

              <NewText font="medium" size="medium" color="grey">
                * The % DailyValue (DV) tells you how much a nutrient in a
                serving of food contributes to a daily diet. 2,000 calories a
                day is used for general nutritional advice.
              </NewText>
            </NutritionFacts>

            <Related font="medium" size="medium">
              Related
            </Related>

            <RelatedImages>
              <RelatedImg source={IMAGES.Lemon} />
              <RelatedImg source={IMAGES.Banana} />
              <RelatedImg source={IMAGES.Avocado} />
            </RelatedImages>

            <BottomView>
              <Add>
                <MinusPlus>
                  <MinusImg source={IMAGES.SimpleMinus} />
                  <PlusImg source={IMAGES.AddPlus} />
                </MinusPlus>

                <NewText size="medium" font="medium">
                  1pc
                </NewText>
              </Add>

              <Note onPress={() => navigation.navigate("Note")}>
                <Ionicons name="pencil" size={width >= 350 ? 26 : 18} />

                <NewText size="medium" font="medium">
                  Leave a note
                </NewText>
              </Note>
            </BottomView>
          </View>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default ItemDetails;
