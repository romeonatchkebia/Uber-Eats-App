import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import CategoriesScreenCard from "../molecules/cards/CategoriesScreenCard";

const Container = styled.View`
  margin: 15px;
`;

const categories = [
  {
    id: 0,
    title: "Fruits & vegetables",
    imgUrl: require("../Images/categoriesScreen/banana.png"),
  },
  {
    id: 1,
    title: "Beverages",
    imgUrl: require("../Images/categoriesScreen/beverages.png"),
  },
  {
    id: 2,
    title: "Fruits & vegetables",
    imgUrl: require("../Images/categoriesScreen/banana.png"),
  },
  {
    id: 3,
    title: "Pantry & Groceries",
    imgUrl: require("../Images/categoriesScreen/pantry.png"),
  },
  {
    id: 4,
    title: "Snacks",
    imgUrl: require("../Images/categoriesScreen/snack.png"),
  },
  {
    id: 5,
    title: "Meat, Seafood & Plant-Bas...",
    imgUrl: require("../Images/categoriesScreen/meat.png"),
  },
  {
    id: 6,
    title: "Cheese",
    imgUrl: require("../Images/categoriesScreen/cheese.png"),
  },
  {
    id: 7,
    title: "Bread",
    imgUrl: require("../Images/categoriesScreen/bread.png"),
  },
  {
    id: 8,
    title: "Milk",
    imgUrl: require("../Images/categoriesScreen/milk.png"),
  },
  {
    id: 9,
    title: "Canned Products",
    imgUrl: require("../Images/categoriesScreen/canned.png"),
  },
  {
    id: 10,
    title: "Home",
    imgUrl: require("../Images/categoriesScreen/home.png"),
  },
  {
    id: 11,
    title: "Breakfast",
    imgUrl: require("../Images/categoriesScreen/breakfast.png"),
  },
  {
    id: 12,
    title: "Sweets & Chocolates",
    imgUrl: require("../Images/categoriesScreen/sweets.png"),
  },
  {
    id: 13,
    title: "Yogurt",
    imgUrl: require("../Images/categoriesScreen/yogurt.png"),
  },
  {
    id: 14,
    title: "Prepared Foods",
    imgUrl: require("../Images/categoriesScreen/prepared.png"),
  },
];

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return (
          <CategoriesScreenCard
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
          />
        );
      })}
    </Container>
  );
};

export default Categories;
