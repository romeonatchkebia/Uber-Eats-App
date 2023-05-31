import { Pressable, Image, Dimensions, View, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";

import * as ROUTS from "../../constants/Routs";
import * as IMAGES from "../../constants/Images";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import SectionDivider from "../atoms/SectionDevider";
import ItemDetailsCard from "../molecules/cards/ItemDetailsCard";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 0 15px;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 23px;
`;

const ImageView = styled.View`
  align-items: center;
  justify-content: center;
`;

const ImageSize = styled(Image)`
  height: ${windowHeight / 4}px;
  width: ${windowWidth / 1.1}px;
`;

const InformView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NutritionFacts = styled.View`
  background: #efeff4;
  padding: 10px;
`;

const Devider = styled(SectionDivider)`
  height: 3px;
  margin: 5px 0;
`;

const Related = styled(NewText)`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const RelatedImages = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const BottomView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Add = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Note = styled.Pressable`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const MinusPlus = styled.View`
  align-items: center;
  flex-direction: row;
  border: 3px solid lightgray;
  gap: 40px;
  padding: 5px 10px;
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
                <Image source={IMAGES.BoldX} />
              </Pressable>
            </Left>

            <Right>
              <Image source={IMAGES.Cart} />
            </Right>
          </Header>

          <ImageView>
            <ImageSize source={item.url} style={{ width: 200 }} />
          </ImageView>

          <View style={{ gap: 10, marginTop: 20 }}>
            <NewText font="bold" size="xlarge">
              {item.title}
            </NewText>

            <NewText font="medium" size="medium" style={{ marginVertical: 20 }}>
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

            <NewText font="medium" size="medium" style={{ marginVertical: 20 }}>
              Nutrition facts
            </NewText>

            <NutritionFacts>
              <NewText
                font="medium"
                size="medium"
                style={{ marginVertical: 10 }}
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
              <Image source={IMAGES.Lemon} />
              <Image source={IMAGES.Banana} />
              <Image source={IMAGES.Avocado} />
            </RelatedImages>

            <BottomView>
              <Add>
                <MinusPlus>
                  <Image source={IMAGES.SimpleMinus} />
                  <Image source={IMAGES.AddPlus} />
                </MinusPlus>

                <NewText size="medium" font="medium">
                  1pc
                </NewText>
              </Add>

              <Note onPress={() => navigation.navigate("Note")}>
                <Image source={IMAGES.Pen} />
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
