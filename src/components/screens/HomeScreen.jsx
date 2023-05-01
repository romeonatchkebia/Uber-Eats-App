import React, { useEffect, useState } from "react";
import { FlatList, SectionList } from "react-native";
import * as Progress from "react-native-progress";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import MainCard from "../organisms/MainCard";
import CtgrButton from "../atoms/CtgrButton";
import ImageViewer from "../atoms/ImageViewer";
import TextViewer from "../atoms/TextViewer";
import * as IMAGES from "../../constants/Images";
import * as ROUTES from "../../constants/Routs";
import HorizontalListCard from "../organisms/HorizontalListCard";

const oldDeliveryList = [
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

const Container = styled(Screen)`
  background: #f6f6f6;
`;

const HomeCard = styled(MainCard)`
  margin-left: 25px;
`;

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

// SectionList component
const SectionTitle = styled(TextViewer)`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;
  padding-left: 21px;
  margin-top: 20px;
`;

const pickUpList = [
  {
    id: 1,
    data: [
      {
        id: 2,
        url: require("../Images/pickup-image1.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 3.2,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
        distance: 0.56,
      },

      {
        id: 3,
        url: require("../Images/pickup-image2.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.5,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
        distance: 0.76,
      },
      {
        id: 4,
        url: require("../Images/mainCardImage3.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 2.7,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
        distance: 5.76,
      },
    ],
    sectionTitle: "Main dishes",
  },
  {
    id: 5,
    data: [
      {
        id: 6,
        url: require("../Images/pickup-image4.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.4,
      },

      {
        id: 7,
        url: require("../Images/pickup-image1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.8,
      },

      {
        id: 8,
        url: require("../Images/pickup-image2.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 4.6,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    sectionTitle: "Sides",
  },
  {
    id: 9,
    data: [
      {
        id: 10,
        url: require("../Images/pickup-image3.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },

      {
        id: 11,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 2.2,
      },
      {
        id: 12,
        url: require("../Images/pickup-image4.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 1.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    sectionTitle: "Drinks",
  },
  {
    id: 13,
    data: [
      {
        id: 14,
        url: require("../Images/pickup-image2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },

      {
        id: 15,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 16,
        url: require("../Images/pickup-image3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sectionTitle: "Desserts",
  },
];

const dineInList = [
  {
    id: 1,
    data: [
      {
        id: 2,
        url: require("../Images/mainCardImage3.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.3,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },

      {
        id: 3,
        url: require("../Images/mainCardImage2.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.3,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },
      {
        id: 4,
        url: require("../Images/mainCardImage.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.3,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },
    ],
    sectionTitle: "Main dishes",
  },
  {
    id: 5,
    data: [
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
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },

      {
        id: 8,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    sectionTitle: "Sides",
  },
  {
    id: 9,
    data: [
      {
        id: 10,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },

      {
        id: 11,
        url: require("../Images/mainCardImage.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
      },
      {
        id: 12,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    sectionTitle: "Drinks",
  },
  {
    id: 13,
    data: [
      {
        id: 14,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },

      {
        id: 15,
        url: require("../Images/mainCardImage.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 16,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sectionTitle: "Desserts",
  },
];
const deliveryList = [
  {
    data: [
      {
        id: 2,
        url: require("../Images/mainCardImage.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.7,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },

      {
        id: 3,
        url: require("../Images/mainCardImage1.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.4,
      },
      {
        id: 4,
        url: require("../Images/mainCardImage2.png"),
        title: "Adenine Kitchen",
        price: "0.29",
        deliveryTime: "10-25",
        rating: 4.3,
        promoOrdersNum: "9",
        promoOrdersPrice: "23",
      },
    ],
    sectionTitle: "Main dishes",
  },
  {
    data: [
      {
        id: 6,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 2.6,
      },

      {
        id: 7,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.6,
      },

      {
        id: 8,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.49",
        deliveryTime: "20-45",
        rating: 3.8,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    sectionTitle: "Sides",
  },
  {
    data: [
      {
        id: 10,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },

      {
        id: 11,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
      },
      {
        id: 12,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.55",
        deliveryTime: "20-45",
        rating: 4.2,
        promoOrdersNum: "3",
        promoOrdersPrice: "7",
      },
    ],
    sectionTitle: "Drinks",
  },
  {
    data: [
      {
        id: 14,
        url: require("../Images/mainCardImage3.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },

      {
        id: 15,
        url: require("../Images/mainCardImage1.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
      {
        id: 16,
        url: require("../Images/mainCardImage2.png"),
        title: "Cardinal Chips",
        price: "0.25",
        deliveryTime: "20-45",
        rating: 4.6,
      },
    ],
    sectionTitle: "Desserts",
  },
];

function HomeScreen({ navigation }) {
  const [category, setCategory] = useState(0);
  const [alldata, setAllData] = useState([]);
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

          <SectionList
            sections={alldata}
            keyExtractor={(item) => item.id}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section }) => (
              <>
                <SectionTitle
                  text={section.sectionTitle}
                  style={{ marginLeft: 12 }}
                />
                <FlatList
                  data={section.data}
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
                />
              </>
            )}
            renderItem={({ item }) => {
              return (
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
                    navigation.navigate(ROUTES.RESTAURANT_DETAILS_SCREEN, item)
                  }
                />
              );
            }}
          />
        </>
      )}
    </Container>
  );
}

export default HomeScreen;
