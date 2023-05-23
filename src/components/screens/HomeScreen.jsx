import React, { useEffect, useRef, useState } from "react";
import { FlatList, SectionList, View, Platform } from "react-native";
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

const Container = styled(Screen)`
  background: ${COLORS.SCREEN_BACKGROUND};
`;

const HomeCard = styled(MainCard)``;

// category and filter buttons
const CtgrFilterBtnView = styled.View``;

const CtgrView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`;

const FilterView = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 10px;
  width: 355px;
`;

const FilterTextPress = styled.Pressable`
  flex-direction: row;
  gap: 5px;
`;

const FilterText = styled(NewText)`
  line-height: 23px;
  padding-left: 28%;
`;

const IconView = styled.View`
  padding-top: 8px;
`;

const FilterIcon = styled(ImageViewer)``;

// Filter button
const FilterBtnPress = styled.Pressable``;

const FilterBtn = styled(ImageViewer)`
  width: 25px;
  height: 25px;
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
  margin-right: 20px;
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

// SectionList component
const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

const SeeAllBtnView = styled.Pressable`
  margin-right: 30px;
`;

const SeeAllBtn = styled(NewText)`
  line-height: 21px;
`;

const SectionTitle = styled(NewText)`
  line-height: 37px;
  padding-left: 21px;
  margin-bottom: 10px;
  margin-left: 12px;
`;

//BottomSheet styles

const BottomSheetCardDiv = styled.View`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

const BottomSheetTitle = styled(NewText)`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

const AllCategoryCard = styled(CategoryCard)`
  margin-bottom: 20px;
`;

// sectinList footer category view

const FooterCategoryView = styled.View`
  align-items: center;
  padding: 10px;
`;

//sectionList HomeCard alternative

const dineInList = [
  {
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
    sectionTitle: false,
  },
  {
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
    sectionTitle: false,
  },
  {
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
    sectionTitle: "Popular near you",
  },
  {
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
    sectionTitle: "Today's offers",
  },
  {
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
    sectionTitle: "Quick eats",
  },
  {
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
    sectionTitle: "Rewards for you",
  },
  {
    horizontalData: [
      {
        id: 32,
        url: require("../Images/pineaple.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 33,
        url: require("../Images/Sauce.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 34,
        url: require("../Images/peach-slices.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
    data: [],
    sectionTitle: "French groceries",
  },
  {
    categoryData: [
      {
        id: 35,
        title: "Cardinal Chips",
        price: "0.49",
      },
    ],
    horizontalData: [
      {
        id: 36,
        url: require("../Images/champain.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 37,
        url: require("../Images/fanta.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 38,
        url: require("../Images/coc.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
    data: [
      {
        id: 39,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sectionTitle: "Sweet treats",
  },
];

const pickUpList = [
  {
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
    sectionTitle: false,
  },
  {
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
    sectionTitle: false,
  },
  {
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
    sectionTitle: "Popular near you",
  },
  {
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
    sectionTitle: "Today's offers",
  },
  {
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
    sectionTitle: "Quick eats",
  },
  {
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
    sectionTitle: "Rewards for you",
  },
  {
    horizontalData: [
      {
        id: 32,
        url: require("../Images/pineaple.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 33,
        url: require("../Images/Sauce.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 34,
        url: require("../Images/peach-slices.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
    data: [],
    sectionTitle: "French groceries",
  },
  {
    categoryData: [
      {
        id: 35,
        title: "Cardinal Chips",
        price: "0.49",
      },
    ],
    horizontalData: [
      {
        id: 36,
        url: require("../Images/champain.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 37,
        url: require("../Images/fanta.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 38,
        url: require("../Images/coc.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
    data: [
      {
        id: 39,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sectionTitle: "Sweet treats",
  },
];
const deliveryList = [
  {
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
    sectionTitle: false,
  },
  {
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
    sectionTitle: false,
  },
  {
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
    sectionTitle: "Popular near you",
  },
  {
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
    sectionTitle: "Today's offers",
  },
  {
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
    sectionTitle: "Quick eats",
  },
  {
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
    sectionTitle: "Rewards for you",
  },
  {
    horizontalData: [
      {
        id: 32,
        url: require("../Images/pineaple.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 33,
        url: require("../Images/Sauce.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 34,
        url: require("../Images/peach-slices.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
    data: [],
    sectionTitle: "French groceries",
  },
  {
    categoryData: [
      {
        id: 35,
        title: "Cardinal Chips",
        price: "0.49",
      },
    ],
    horizontalData: [
      {
        id: 36,
        url: require("../Images/champain.png"),
        title: "Organic Pineaple",
        price: "9.00",
      },
      {
        id: 37,
        url: require("../Images/fanta.png"),
        title: "Stir Fry Sauce",
        price: "13.64",
      },
      {
        id: 38,
        url: require("../Images/coc.png"),
        title: "Peach Slices",
        price: "10.00",
      },
    ],
    data: [
      {
        id: 39,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sectionTitle: "Sweet treats",
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
          <Progress.CircleSnail size={80} color={["red", "green", "blue"]} />
        </SpinnerView>
      ) : (
        <>
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
              <FilterBtnPress>
                <FilterBtn source={IMAGES.Slider} />
              </FilterBtnPress>
            </FilterView>
          </CtgrFilterBtnView>

          <CategoryContainer>
            <CategoryCard title="Convenience" imgUrl={IMAGES.Convenience} />
            <CategoryCard title="Alcohol" imgUrl={IMAGES.Alcohol} />
            <CategoryCard title="Pet Supplies" imgUrl={IMAGES.PetSupplies} />
            <CategoryCard
              title="More"
              imgUrl={IMAGES.More}
              onPress={() => categorySheetRef.current.open()}
            />
          </CategoryContainer>

          <>
            <SectionList
              sections={alldata}
              keyExtractor={(item) => item.id}
              SectionSeparatorComponent={SectionDevider}
              stickySectionHeadersEnabled={false}
              renderSectionHeader={({ section }) => (
                <>
                  <SectionTitleView>
                    <SectionTitle size="xlarge" font="bold">
                      {section.sectionTitle}
                    </SectionTitle>
                    <SeeAllBtnView>
                      <SeeAllBtn
                        font="medium"
                        size="medium"
                        secTitle={
                          section.sectionTitle
                            ? (visible = true)
                            : (visible = false)
                        }
                      >
                        See All
                      </SeeAllBtn>
                    </SeeAllBtnView>
                  </SectionTitleView>
                  <FlatList
                    data={section.horizontalData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                      return (
                        item.rating && (
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
                        )
                      );
                    }}
                    horizontal
                  />
                  <FlatList
                    data={section.horizontalData}
                    horizontal={false}
                    numColumns={3}
                    style={{ marginLeft: 23 }}
                    renderItem={({ item }) => {
                      return (
                        !item.rating && (
                          <ThreeObjectCardForHomeScreen
                            title={item.title}
                            imgUrl={item.url}
                            subTitle={item.price}
                          />
                        )
                      );
                    }}
                  />
                </>
              )}
              renderItem={({ item }) => {
                return (
                  item.rating && (
                    <HomeCard
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
                  <FlatList
                    data={section.categoryData}
                    renderItem={({ item }) => {
                      return !item.url && <HomeScreenBottomCard />;
                    }}
                  />
                </FooterCategoryView>
              )}
            />
          </>
        </>
      )}
      <Portal>
        <BottomSheet bottomSheetRef={categorySheetRef} modalHeight={700}>
          <BottomSheetCardDiv>
            <View>
              <BottomSheetTitle size="large">All categories</BottomSheetTitle>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {ctgryListItems.map((item) => {
                return (
                  <AllCategoryCard
                    key={item.id}
                    title={item.title}
                    imgUrl={item.imgUrl}
                  />
                );
              })}
            </View>
          </BottomSheetCardDiv>
        </BottomSheet>
      </Portal>
    </Container>
  );
}

export default HomeScreen;
