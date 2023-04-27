import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import * as Progress from "react-native-progress";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import MainCard from "../organisms/MainCard";
import CtgrButton from "../atoms/CtgrButton";
import ImageViewer from "../atoms/ImageViewer";
import TextViewer from "../atoms/TextViewer";
import * as IMAGES from "../../constants/Images";

const deliveryList = [
  {
    id: 1,
    url: require("../Images/mainCardImage.png"),
    title: "Adenine Kitchen",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.3,
    promoOrdersNum: "9",
    promoOrdersPrice: "23",
  },
  {
    id: 2,
    url: require("../Images/mainCardImage1.png"),
    title: "Cardinal Chips",
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
  {
    id: 3,
    url: require("../Images/mainCardImage2.png"),
    title: "Cardinal Chips",
    price: "0.55",
    deliveryTime: "20-45",
    rating: 4.6,
    promoOrdersNum: "3",
    promoOrdersPrice: "7",
  },
  {
    id: 4,
    url: require("../Images/mainCardImage3.png"),
    title: "Cardinal Chips",
    price: "0.25",
    deliveryTime: "20-45",
    rating: 4.6,
  },
];
const pickUpList = [
  {
    id: 1,
    url: require("../Images/pickup-image1.png"),
    title: "Pickup",
    deliveryTime: "10-25",
    price: 0.35,
    rating: 4.3,
    promoOrdersNum: "9",
    promoOrdersPrice: "23",
    distance: 2.5,
  },
  {
    id: 2,
    url: require("../Images/mainCardImage2.png"),
    title: "Pickup",
    deliveryTime: "20-45",
    price: 0.25,
    rating: 4.6,
    distance: 4.7,
  },
  {
    id: 3,
    url: require("../Images/pickup-image3.png"),
    title: "Pickup",
    deliveryTime: "20-45",
    price: 0.75,
    rating: 4.6,
    distance: 1.3,
  },
  {
    id: 4,
    url: require("../Images/pickup-image4.png"),
    title: "Pickup",
    deliveryTime: "20-45",
    price: 0.43,
    rating: 4.6,
    distance: 1.7,
  },
];
const dineInList = [
  {
    id: 1,
    url: require("../Images/mainCardImage.png"),
    title: "Dine-in",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.3,
    promoOrdersNum: "9",
    promoOrdersPrice: "23",
  },
  {
    id: 2,
    url: require("../Images/mainCardImage1.png"),
    title: "Dine-in",
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
  {
    id: 3,
    url: require("../Images/mainCardImage2.png"),
    title: "Dine-in",
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
  {
    id: 4,
    url: require("../Images/mainCardImage3.png"),
    title: "Dine-in",
    price: "0.49",
    deliveryTime: "20-45",
    rating: 4.6,
  },
];

const Container = styled(Screen)`
  background: #f6f6f6;
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

const FilterText = styled(TextViewer)`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  padding-left: 30%;
`;

const IconView = styled.View`
  padding-top: 8px;
`;

const FilterIcon = styled(ImageViewer)``;

const FilterBtnPress = styled.Pressable``;

const FilterBtn = styled(ImageViewer)`
  width: 25px;
  height: 25px;
`;

const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

function HomeScreen() {
  const [category, setCategory] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      fetchData();
    }, 1000);
  }, [category]);

  function fetchData() {
    if (category === 0) {
      setData(deliveryList);
    } else if (category === 1) {
      setData(pickUpList);
    } else {
      setData(dineInList);
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
                <FilterText text="Now • London Hall" />
                <IconView>
                  <FilterIcon source={IMAGES.FilterTextIcon} />
                </IconView>
              </FilterTextPress>
              <FilterBtnPress>
                <FilterBtn source={IMAGES.Slider} />
              </FilterBtnPress>
            </FilterView>
          </CtgrFilterBtnView>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <HomeCard
                title={item.title}
                source={item.url}
                price={category === 0 ? item.price : ""}
                deliveryTime={item.deliveryTime}
                rating={item.rating}
                promoOrdersNum={category === 0 ? item.promoOrdersNum : ""}
                promoOrdersPrice={item.promoOrdersPrice}
                distance={item.distance}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </Container>
  );
}

export default HomeScreen;
