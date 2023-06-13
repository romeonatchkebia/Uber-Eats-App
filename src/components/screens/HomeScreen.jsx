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

const WrapCat = styled.View``;

const OuterDiv = styled.View`
  display: flex;
  background: rgba(230, 230, 230, 0.4);
  height: ${height * 0.085}px;
  padding-top: ${width * 0.025}px;
  width: ${width * 0.2}px;
`;

const More = styled.Pressable`
  display: flex;
  align-items: center;
  background: rgba(230, 230, 230, 0.4);
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
  background: rgba(230, 230, 230, 0.4);
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

const pickUpList = [
  {
    sectionTitle: false,
    data: [
      {
        id: 1,
        url: require("../Images/mainCardImage.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.7,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },
      {
        id: 2,
        url: require("../Images/mainCardImage1.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.4,
      },
    ],
  },
  {
    sectionTitle: false,
    horizontalData: [
      {
        id: 3,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 4,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 5,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 6,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
      {
        id: 7,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.8,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
  },
  {
    sectionTitle: "Popular near you",
    horizontalData: [
      {
        id: 12,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 13,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 14,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
      {
        id: 15,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
      },
      {
        id: 16,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
      {
        id: 17,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    categoryData: [
      {
        id: 8,
        url: require("../Images/carribean.png"),
        title: "Carribean",
      },
      {
        id: 9,
        url: require("../Images/asian.png"),
        title: "Asian",
      },
      {
        id: 10,
        url: require("../Images/burger.png"),
        title: "Burger",
      },
      {
        id: 11,
        url: require("../Images/indian.png"),
        title: "Indian",
      },
    ],
  },
  {
    sectionTitle: "Today's offers",
    horizontalData: [
      {
        id: 18,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 19,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 20,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 21,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 22,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: "Quick eats",
    horizontalData: [
      {
        id: 23,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 24,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 25,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 26,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 27,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: "Rewards for you",
    horizontalData: [
      {
        id: 28,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 29,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 30,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 31,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: false,
    title: "French groceries",
    data: [
      {
        id: 32,
        url: require("../Images/mainCardImage.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 33,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    french: [
      {
        id: 34,
        url: require("../Images/pineaple.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 35,
        url: require("../Images/Sauce.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 36,
        url: require("../Images/peach-slices.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
  },
  {
    sectionTitle: false,
    title: "Sweet treats",
    data: [
      {
        id: 37,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 38,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sweets: [
      {
        id: 39,
        url: require("../Images/champain.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 40,
        url: require("../Images/fanta.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 41,
        url: require("../Images/coc.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
  },
];
const dineInList = [
  {
    sectionTitle: false,
    data: [
      {
        id: 1,
        url: require("../Images/mainCardImage.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.7,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },
      {
        id: 2,
        url: require("../Images/mainCardImage1.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.4,
      },
    ],
  },
  {
    sectionTitle: false,
    horizontalData: [
      {
        id: 3,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 4,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 5,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 6,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
      {
        id: 7,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.8,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
  },
  {
    sectionTitle: "Popular near you",
    horizontalData: [
      {
        id: 12,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 13,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 14,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
      {
        id: 15,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
      },
      {
        id: 16,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
      {
        id: 17,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    categoryData: [
      {
        id: 8,
        url: require("../Images/carribean.png"),
        title: "Carribean",
      },
      {
        id: 9,
        url: require("../Images/asian.png"),
        title: "Asian",
      },
      {
        id: 10,
        url: require("../Images/burger.png"),
        title: "Burger",
      },
      {
        id: 11,
        url: require("../Images/indian.png"),
        title: "Indian",
      },
    ],
  },
  {
    sectionTitle: "Today's offers",
    horizontalData: [
      {
        id: 18,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 19,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 20,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 21,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 22,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: "Quick eats",
    horizontalData: [
      {
        id: 23,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 24,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 25,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 26,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 27,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: "Rewards for you",
    horizontalData: [
      {
        id: 28,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 29,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 30,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 31,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: false,
    title: "French groceries",
    data: [
      {
        id: 32,
        url: require("../Images/mainCardImage.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 33,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    french: [
      {
        id: 34,
        url: require("../Images/pineaple.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 35,
        url: require("../Images/Sauce.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 36,
        url: require("../Images/peach-slices.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
  },
  {
    sectionTitle: false,
    title: "Sweet treats",
    data: [
      {
        id: 37,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 38,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sweets: [
      {
        id: 39,
        url: require("../Images/champain.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 40,
        url: require("../Images/fanta.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 41,
        url: require("../Images/coc.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
  },
];
const deliveryList = [
  {
    sectionTitle: false,
    data: [
      {
        id: 1,
        url: require("../Images/mainCardImage.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.7,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },
      {
        id: 2,
        url: require("../Images/mainCardImage1.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.4,
      },
    ],
  },
  {
    sectionTitle: false,
    horizontalData: [
      {
        id: 3,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 4,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 5,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 6,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
      {
        id: 7,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.8,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
  },
  {
    sectionTitle: "Popular near you",
    horizontalData: [
      {
        id: 12,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 13,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 14,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
      {
        id: 15,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
      },
      {
        id: 16,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
      {
        id: 17,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    categoryData: [
      {
        id: 8,
        url: require("../Images/carribean.png"),
        title: "Carribean",
      },
      {
        id: 9,
        url: require("../Images/asian.png"),
        title: "Asian",
      },
      {
        id: 10,
        url: require("../Images/burger.png"),
        title: "Burger",
      },
      {
        id: 11,
        url: require("../Images/indian.png"),
        title: "Indian",
      },
    ],
  },
  {
    sectionTitle: "Today's offers",
    horizontalData: [
      {
        id: 18,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 19,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 20,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 21,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 22,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: "Quick eats",
    horizontalData: [
      {
        id: 23,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 24,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 25,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 26,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 27,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: "Rewards for you",
    horizontalData: [
      {
        id: 28,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },
      {
        id: 29,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },
    ],
    data: [
      {
        id: 30,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 31,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
  },
  {
    sectionTitle: false,
    title: "French groceries",
    data: [
      {
        id: 32,
        url: require("../Images/mainCardImage.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 33,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    french: [
      {
        id: 34,
        url: require("../Images/pineaple.png"),
        title: "Pineaple",
        price: "9.00",
      },
      {
        id: 35,
        url: require("../Images/Sauce.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 36,
        url: require("../Images/peach-slices.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
  },
  {
    sectionTitle: false,
    title: "Sweet treats",
    data: [
      {
        id: 37,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 38,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sweets: [
      {
        id: 39,
        url: require("../Images/champain.png"),
        title: " Sweet Champain sssssssssssssssssss",
        price: "9.00",
      },
      {
        id: 40,
        url: require("../Images/fanta.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 41,
        url: require("../Images/coc.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
  },
];

const ctgryListItems = [
  {
    id: 0,
    title: "Convenience",
    imgUrl: require("../Images/convenience.png"),
  },
  {
    id: 1,
    title: "American",
    imgUrl: require("../Images/american.png"),
  },
  {
    id: 2,
    title: "Asian",
    imgUrl: require("../Images/asian.png"),
  },
  {
    id: 3,
    title: "Burger",
    imgUrl: require("../Images/burger.png"),
  },
  {
    id: 4,
    title: "Carribean",
    imgUrl: require("../Images/carribean.png"),
  },
  {
    id: 5,
    title: "Chinese",
    imgUrl: require("../Images/chinese.png"),
  },
  {
    id: 6,
    title: "Dessert",
    imgUrl: require("../Images/dessert.png"),
  },
  {
    id: 7,
    title: "Fast Food",
    imgUrl: require("../Images/fastFood.png"),
  },
  {
    id: 8,
    title: "Flowers",
    imgUrl: require("../Images/flowers.png"),
  },
  {
    id: 9,
    title: "French",
    imgUrl: require("../Images/french.png"),
  },
  {
    id: 10,
    title: "Grocery",
    imgUrl: require("../Images/grocery.png"),
  },
  {
    id: 11,
    title: "Halal",
    imgUrl: require("../Images/halal.png"),
  },
  {
    id: 12,
    title: "Ice-Cream",
    imgUrl: require("../Images/ice-cream.png"),
  },
  {
    id: 13,
    title: "Indian",
    imgUrl: require("../Images/indian.png"),
  },
  {
    id: 14,
    title: "Pet Supplies",
    imgUrl: require("../Images/pet_supplies.png"),
  },
  {
    id: 15,
    title: "Retails",
    imgUrl: require("../Images/retails.png"),
  },
  {
    id: 16,
    title: "Ride",
    imgUrl: require("../Images/ride.png"),
  },
  {
    id: 17,
    title: "Speciality",
    imgUrl: require("../Images/speciality.png"),
  },
  {
    id: 18,
    title: "Take out",
    imgUrl: require("../Images/takeout.png"),
  },
  {
    id: 19,
    title: "Alcohol",
    imgUrl: require("../Images/alcohol.png"),
  },
];

function HomeScreen({ navigation }) {
  const [category, setCategory] = useState(0);
  const [alldata, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const categorySheetRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      fetchData();
    }, 1000);
  }, [category]);

  function fetchData() {
    if (category === 0) {
      setAllData(deliveryList);
    } else if (category === 1) {
      setAllData(pickUpList);
    } else {
      setAllData(dineInList);
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
      {isLoading ? (
        <SpinnerView>
          <Progress.CircleSnail
            size={height >= 700 ? 80 : 50}
            color={["red", "green", "blue"]}
          />
        </SpinnerView>
      ) : (
        <>
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
                <FilterTextPress>
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
                  <CategoryCard imgUrl={IMAGES.Convenience} />
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
                        navigation.navigate(
                          ROUTES.RESTAURANT_DETAILS_SCREEN,
                          item
                        )
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

            {category !== 1 && (
              <View>
                <SectionTitleView>
                  <SectionTitle size="xlarge" font="bold">
                    {deliveryList[7].title}
                  </SectionTitle>

                  <SeeAllBtnView>
                    <SeeAllBtn font="medium" size="medium">
                      See All
                    </SeeAllBtn>
                  </SeeAllBtnView>
                </SectionTitleView>

                <View>
                  <FlatList
                    data={deliveryList[7].sweets}
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

            {category !== 1 && (
              <View>
                <SectionTitleView>
                  <SectionTitle size="xlarge" font="bold">
                    {deliveryList[6].title}
                  </SectionTitle>

                  <SeeAllBtnView>
                    <SeeAllBtn font="medium" size="medium">
                      See All
                    </SeeAllBtn>
                  </SeeAllBtnView>
                </SectionTitleView>

                <FlatList
                  data={deliveryList[6].french}
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
        </>
      )}

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
                {ctgryListItems.map((item) => {
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
