import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  SectionList,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import * as Progress from "react-native-progress";
import { Portal } from "react-native-portalize";
import BottomSheet from "../atoms/BottomSheet";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import MainCard from "../molecules/cards/MainCard";
import CtgrButton from "../atoms/CtgrButton";
import ImageViewer from "../atoms/ImageViewer";
import NewText from "../atoms/NewText";

import * as IMAGES from "../../constants/Images";
import * as ROUTES from "../../constants/Routs";
import * as COLORS from "../../constants/Colors";

import HorizontalListCard from "../molecules/cards/HorizontalListCard";
import CategoryCard from "../molecules/cards/CategoryCard";
import SectionDevider from "../atoms/SectionDevider";
import CategoryCardForFooter from "../molecules/cards/CategoryCardForFooter";
import ThreeObjectCardForHomeScreen from "../molecules/cards/ThreeObjectCardForHomeScreen";
import HomeScreenBottomCard from "../molecules/cards/HomeScreenBottomCard";
import GoogleMap from "../organisms/GoogleMap";

import {
  ctgryListItems,
  pickUpList,
  dineInList,
  deliveryList,
} from "../../data/appData";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)`
  background: ${COLORS.SCREEN_BACKGROUND};
`;

// category and filter buttons
const CtgrFilterBtnView = styled.View``;

const CtgrView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${width * 0.05}px;
`;

const FilterView = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: ${width * 0.038}px;
`;

const FilterTextPress = styled.Pressable`
  flex-direction: row;
`;

const FilterText = styled(NewText)`
  line-height: ${width * 0.058}px;
  padding-left: ${width * 0.26}px;
  padding-right: ${width * 0.013}px;
`;

const IconView = styled.View`
  padding-top: ${height * 0.009}px;
`;

const FilterIcon = styled(ImageViewer)``;

// Filter button
const FilterBtnPress = styled.Pressable``;

const FilterBtn = styled(ImageViewer)`
  width: ${width * 0.063}px;
  height: ${width * 0.063}px;
`;

// loading spinner
const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

//categories

const CategoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5px;
  margin: ${width * 0.038}px;
`;

const WrapCat = styled.Pressable``;

const OuterDiv = styled.Pressable`
  display: flex;
  background: rgba(230, 230, 230, 1);
  height: ${height * 0.085}px;
  padding-top: ${width * 0.025}px;
  width: ${width * 0.2}px;
`;

const More = styled.Pressable`
  display: flex;
  align-items: center;
  background: rgba(230, 230, 230, 1);
  height: ${height * 0.085}px;
  padding-top: ${width * 0.015}px;
  width: ${width * 0.2}px;
`;

const CardTitle = styled(NewText)`
  text-align: center;
`;

// SectionList component
const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${width * 0.038}px;
`;

const SeeAllBtnView = styled.Pressable``;

const SeeAllBtn = styled(NewText)`
  line-height: ${height * 0.025}px;
`;

const SectionTitle = styled(NewText)`
  line-height: ${height * 0.044}px;
`;

const Devider = styled(SectionDevider)`
  height: 8px;
`;

//BottomSheet styles

const BottomSheetCardDiv = styled.Pressable`
  flex-wrap: wrap;
  padding-left: ${width * 0.025}px;
  padding-bottom: 10%;
`;

const BottomSheetTitle = styled(NewText)`
  margin-top: ${height * 0.023}px;
  margin-bottom: ${height * 0.023}px;
  text-align: center;
  width: 100%;
`;

const RenderView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const OuterDivForSheet = styled.View`
  display: flex;
  background: rgba(230, 230, 230, 1);
  height: ${height * 0.085}px;
  padding-top: ${width * 0.025}px;
  width: ${width * 0.2}px;
  margin: ${width * 0.018}px;
`;

const SheetCardTitle = styled(NewText)`
  margin-left: ${width * 0.015}px;
`;

// sectinList footer category view

const FooterCategoryView = styled.View`
  align-items: center;
`;

function HomeScreen({ navigation }) {
  const [sheetListItems, setSheetListItems] = useState(ctgryListItems);

  const [delivery, setDelivery] = useState(deliveryList);

  const [pickup, setPickup] = useState(pickUpList);

  const [dinIn, setDineIn] = useState(dineInList);

  const [alldata, setAllData] = useState([]);
  const [category, setCategory] = useState(0);

  const categorySheetRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [category]);

  function fetchData() {
    if (category === 0) {
      setAllData(delivery);
    } else if (category === 1) {
      setAllData(pickup);
    } else {
      setAllData(dinIn);
    }
  }

  function handlePress(value) {
    setCategory(value);
  }

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  return (
    <Container>
      <ScrollView>
        <CtgrFilterBtnView>
          <CtgrView>
            {btns.map((btn) => {
              return (
                <CtgrButton
                  title={btn.title}
                  onPress={() => handlePress(btn.value)}
                  key={btn.value}
                  black={btn.value === category ? true : false}
                />
              );
            })}
          </CtgrView>

          <FilterView>
            <FilterTextPress
              onPress={() => navigation.navigate("ChangeAddress")}
            >
              <FilterText font="medium" size="large">
                Now • London Hall
              </FilterText>

              <IconView>
                <FilterIcon source={IMAGES.FilterTextIcon} />
              </IconView>
            </FilterTextPress>

            <FilterBtnPress onPress={() => navigation.navigate("Filters")}>
              <FilterBtn source={IMAGES.Slider} />
            </FilterBtnPress>
          </FilterView>
        </CtgrFilterBtnView>

        <View style={{ alignItems: "center" }}>
          {category === 1 && <GoogleMap />}
        </View>

        <CategoryContainer>
          <WrapCat>
            <OuterDiv>
              <CategoryCard
                imgUrl={IMAGES.Convenience}
                onPress={() => navigation.navigate("Convenience")}
              />
            </OuterDiv>

            <CardTitle font="medium">Convenience</CardTitle>
          </WrapCat>

          <WrapCat>
            <OuterDiv>
              <CategoryCard imgUrl={IMAGES.Alcohol} />
            </OuterDiv>

            <CardTitle font="medium">Alcohol</CardTitle>
          </WrapCat>

          <WrapCat>
            <OuterDiv>
              <CategoryCard imgUrl={IMAGES.PetSupplies} />
            </OuterDiv>

            <CardTitle font="medium">Pet Supplies</CardTitle>
          </WrapCat>

          {category === 0 ? (
            <WrapCat>
              <More onPress={() => categorySheetRef.current.open()}>
                <NewText size="xxlarge" font="bold">
                  ...
                </NewText>
              </More>

              <CardTitle font="medium">More</CardTitle>
            </WrapCat>
          ) : (
            <WrapCat>
              <OuterDiv>
                <CategoryCard imgUrl={IMAGES.Convenience} />
              </OuterDiv>

              <CardTitle font="medium">Grocery</CardTitle>
            </WrapCat>
          )}
        </CategoryContainer>

        <SectionList
          sections={alldata}
          keyExtractor={(item) => item.id}
          SectionSeparatorComponent={Devider}
          stickySectionHeadersEnabled={false}
          scrollEnabled={false}
          renderSectionHeader={({ section }) => (
            <>
              {section.sectionTitle && (
                <SectionTitleView>
                  <SectionTitle size="xlarge" font="bold">
                    {section.sectionTitle}
                  </SectionTitle>

                  <SeeAllBtnView>
                    {section.sectionTitle && (
                      <SeeAllBtn
                        font="medium"
                        size="medium"
                        secTitle={section.sectionTitle}
                      >
                        See All
                      </SeeAllBtn>
                    )}
                  </SeeAllBtnView>
                </SectionTitleView>
              )}

              {category !== 1 && (
                <FlatList
                  data={section.horizontalData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    return (
                      <HorizontalListCard
                        title={item.title}
                        source={item.url}
                        price={category === 0 ? item.price : ""}
                        deliveryTime={item.deliveryTime}
                        rating={item.rating}
                        promoOrdersNum={
                          category === 0 ? item.promoOrdersNum : ""
                        }
                        promoOrdersPrice={item.promoOrdersPrice}
                        distance={item.distance}
                        sectionTitle={item.sectionTitle}
                        onPress={() => console.log("works")}
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              )}
            </>
          )}
          renderItem={({ item }) => {
            return (
              item.rating && (
                <MainCard
                  title={item.title}
                  source={item.url}
                  price={category === 0 ? item.price : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promoOrdersNum={category === 0 ? item.promoOrdersNum : ""}
                  promoOrdersPrice={item.promoOrdersPrice}
                  distance={item.distance}
                  sectionTitle={item.sectionTitle}
                  onPress={() =>
                    navigation.navigate(ROUTES.RESTAURANT_DETAILS_SCREEN, item)
                  }
                />
              )
            );
          }}
          renderSectionFooter={({ section }) => (
            <FooterCategoryView>
              <FlatList
                data={section.categoryData}
                horizontal={false}
                numColumns={2}
                renderItem={({ item }) => {
                  return (
                    !item.price && (
                      <CategoryCardForFooter
                        title={item.title}
                        imgUrl={item.url}
                        onPress={() => console.log("works")}
                      />
                    )
                  );
                }}
              />
            </FooterCategoryView>
          )}
        />

        {category == 0 && (
          <View>
            <SectionTitleView>
              <SectionTitle size="xlarge" font="bold">
                {delivery[7].title}
              </SectionTitle>

              <SeeAllBtnView>
                <SeeAllBtn font="medium" size="medium">
                  See All
                </SeeAllBtn>
              </SeeAllBtnView>
            </SectionTitleView>

            <View>
              <FlatList
                data={delivery[7].sweets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ThreeObjectCardForHomeScreen
                    title={item.title}
                    subTitle={item.price}
                    imgUrl={item.url}
                  />
                )}
                scrollEnabled={false}
                numColumns={3}
              />
            </View>
          </View>
        )}

        {category == 0 && (
          <View>
            <SectionTitleView>
              <SectionTitle size="xlarge" font="bold">
                {delivery[6].title}
              </SectionTitle>

              <SeeAllBtnView>
                <SeeAllBtn font="medium" size="medium">
                  See All
                </SeeAllBtn>
              </SeeAllBtnView>
            </SectionTitleView>

            <FlatList
              data={delivery[6].french}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ThreeObjectCardForHomeScreen
                  title={item.title}
                  subTitle={item.price}
                  imgUrl={item.url}
                />
              )}
              scrollEnabled={false}
              numColumns={3}
            />
          </View>
        )}

        <Devider />

        <HomeScreenBottomCard />
      </ScrollView>

      <Portal>
        <BottomSheet
          bottomSheetRef={categorySheetRef}
          adjustToContentHeight={true}
        >
          <BottomSheetCardDiv onPress={() => categorySheetRef.current.close()}>
            <ScrollView>
              <View>
                <BottomSheetTitle size="xlarge">
                  All categories
                </BottomSheetTitle>
              </View>

              <RenderView>
                {sheetListItems.map((item) => {
                  return (
                    <View key={item.id}>
                      <WrapCat>
                        <OuterDivForSheet>
                          <CategoryCard imgUrl={item.imgUrl} />
                        </OuterDivForSheet>

                        <SheetCardTitle font="medium">
                          {item.title}
                        </SheetCardTitle>
                      </WrapCat>
                    </View>
                  );
                })}
              </RenderView>
            </ScrollView>
          </BottomSheetCardDiv>
        </BottomSheet>
      </Portal>
    </Container>
  );
}

export default HomeScreen;
