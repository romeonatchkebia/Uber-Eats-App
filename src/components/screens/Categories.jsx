import React, { useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import CategoriesScreenCard from "../molecules/cards/CategoriesScreenCard";
import { categories } from "../../data/appData";

const { width } = Dimensions.get("screen");

const Container = styled.View``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const Categories = () => {
  const [data, setData] = useState(categories);

  return (
    <Container>
      <Wrapper>
        {data.map((item) => {
          return (
            <CategoriesScreenCard
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Categories;
