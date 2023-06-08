import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import * as Progress from "react-native-progress";
import * as IMAGES from "../../constants/Images";
import * as ROUTES from "../../constants/Routs";

import RestDetailsCard from "../molecules/cards/RestDetailsCard";
import DeliveryPickupBtns from "../atoms/DeliveryPickupBtns";
import RestDetailsPopularCard from "../molecules/cards/RestDetailsPopularCard";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";

const { height, width } = Dimensions.get("screen");

const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${height * 0.023}px;
`;

const InfoContainer = styled.View`
  width: 80%;
`;

const RestTiTle = styled(NewText)`
  line-height: ${height * 0.042}px;
`;

const RestInfoView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const RestInfo = styled(NewText)`
  line-height: ${height * 0.023}px;
`;

const WorkingInfo = styled(NewText)`
  line-height: ${height * 0.023}px;
`;

const RightContainer = styled.Pressable`
  justify-content: flex-end;
`;

const RightArrow = styled.Image`
  margin-bottom: ${height * 0.029}px;
  margin-right: ${width * 0.05}px;
`;

const ButtonsViewContainer = styled.View`
  margin-top: ${height * 0.023}px;
  justify-content: center;
  gap: ${width * 0.05}px;
`;

const SwitcherContainer = styled.View`
  background-color: #eeeeee;
  border-radius: ${width * 0.13}px;
  height: ${height * 0.065}px;
  flex-direction: row;
  padding: ${height * 0.006}px;
`;

const SectionContainer = styled.View``;

const SectionTitle = styled(NewText)`
  line-height: ${height * 0.042}px;
  margin: ${height * 0.023}px 0;
`;

const BottomSaveView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${height * 0.023}px;
  margin-top: ${height * 0.035}px;
`;

const SaveText = styled(NewText)`
  line-height: ${height * 0.023}px;
  text-align: center;
`;

const data = {
  restaurant: {
    id: 0,
    name: "Lanespan Pizza & Pub (Emerville)",
    rating: 4.6,
    ratingQuantity: 300,
    category: "Pizza",
    workingHours: "open until 3:00 am ",
    deliveryTime: "25-35",
    deliveryDistance: "1,7",
    pickupTime: "5-15",
    pickupDistance: "1,7",
  },

  bottomRestName: {
    id: 1,
    restTitle: "Alcohol - Beer (Must be 21 to Purchase)",
    title: "Russian River Plinty Bottle",
    price: "21.00",
    desc: "Must be 21 to purchase ",
  },

  mostPopular: [
    {
      id: 2,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasasa dsa sadsa da sd asdasdasdas dasdas das das ",
      img: require("../Images/pizza.png"),
    },
    {
      id: 3,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasdasdas das das dasdasdas dasd asd asdsadsa ",
      img: require("../Images/pizza.png"),
    },
    {
      id: 4,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasd asd asd asdasdasdasd sad as dsa d sad sadsadas ",
      img: require("../Images/pizza.png"),
    },
    {
      id: 5,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasd asd asd asdasdasdasd sad as dsa d sad sadsadas ",
      promo: true,
    },
  ],
  pickedForYou: [
    {
      id: 6,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      id: 7,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      id: 8,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      id: 9,
      title: "Rus River Plinty Bottle",
      price: "10.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
      itemQuantity: 12,
    },
  ],
  ourSpecialPizaa: [
    {
      id: 10,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      id: 11,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      id: 12,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      id: 13,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
  ],
  starters: {
    id: 14,
    title: "Garlic knots",
    desc: "Priced by add-ons",
    popular: false,
    img: require("../Images/starters-card-image.png"),
  },
  salads: [
    {
      id: 15,
      title: "Little Cesar Salad",
      price: "18.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
      popular: true,
    },
    {
      id: 16,
      title: "Rocket Salad",
      price: "10.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
  ],
  ourSpecialPizza: [
    {
      id: 17,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasasa dsa sadsa da sd asdasdasdas dasdas das das ",
      img: require("../Images/pizza.png"),
    },
    {
      id: 18,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasdasdas das das dasdasdas dasd asd asdsadsa ",
      img: require("../Images/pizza.png"),
    },
    {
      id: 19,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasd asd asd asdasdasdasd sad as dsa d sad sadsadas ",
      img: require("../Images/pizza.png"),
    },
    {
      id: 20,
      title: "Happy bithday Pizza",
      price: "21.00",
      desc: "dasdasdasdas dasd as da sd asd sadasdas da sdasdasdasdas das d asdasdasdas",
      popular: true,
    },
  ],
  mischelaneous: [
    {
      id: 21,
      title: "Little Cesar Salad",
      price: "18.00",
      popular: true,
    },
    {
      id: 22,
      title: "Rocket Salad",
      price: "10.00",
      popular: true,
    },
    {
      id: 23,
      title: "Great Salad",
      price: "10.00",
    },
  ],
};

const RestaurantDetails = ({ navigation, route }) => {
  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [category]);

  function handlePress(value) {
    setCategory(value);
  }

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  function calcRating(num) {
    if (num > 200) {
      return "200+ Rating";
    } else {
      return num;
    }
  }

  const rest = data.restaurant;

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
        <ScrollView>
          <Wrapper>
            <HeaderContainer>
              <InfoContainer>
                <RestTiTle
                  font="bold"
                  size="xlarge"
                  style={{ marginTop: height * 0.035 }}
                >
                  {rest.name}
                </RestTiTle>

                <RestInfoView>
                  <View style={{ marginRight: width * 0.0076 }}>
                    <Ionicons name="star" size={width >= 350 ? 26 : 18} />
                  </View>

                  <RestInfo font="medium" size="medium">
                    {rest.rating}({calcRating(rest.ratingQuantity)}) •{" "}
                    {rest.category} • $$
                  </RestInfo>
                </RestInfoView>

                <WorkingInfo color="grey">{rest.workingHours}</WorkingInfo>

                <WorkingInfo color="grey">
                  Tap for hours info and more{" "}
                </WorkingInfo>
              </InfoContainer>

              <RightContainer>
                <Ionicons
                  name="chevron-forward"
                  size={width >= 350 ? 26 : 18}
                />
              </RightContainer>
            </HeaderContainer>

            <ButtonsViewContainer>
              <GreyBtnWithIcon title="Group order" img={IMAGES.GroupImage} />

              <SwitcherContainer>
                {btns.map((btn) => {
                  return (
                    <DeliveryPickupBtns
                      Time={
                        btn.value === 0 ? rest.deliveryTime : rest.pickupTime
                      }
                      Distance={
                        btn.value === 0
                          ? rest.deliveryDistance
                          : rest.pickupDistance
                      }
                      title={btn.title}
                      onPress={() => handlePress(btn.value)}
                      key={btn.title}
                      black={btn.value === category ? true : false}
                    />
                  );
                })}
              </SwitcherContainer>
            </ButtonsViewContainer>

            <SectionContainer>
              <SectionTitle font="bold" size="xlarge">
                Most Popular
              </SectionTitle>

              {data.mostPopular.map((item) => {
                return (
                  <RestDetailsCard
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    desc={item.desc}
                    key={item.id}
                    promo={item.promo}
                    onPress={() =>
                      navigation.navigate(ROUTES.ORDER_SELECTION_SCREEN, {
                        ...item,
                        restName: data.restaurant.name,
                      })
                    }
                  />
                );
              })}
            </SectionContainer>

            <SectionContainer>
              <SectionTitle font="bold" size="xlarge">
                Picked for you
              </SectionTitle>

              {data.pickedForYou.map((item) => {
                return (
                  <RestDetailsCard
                    title={item.title}
                    price={item.price}
                    desc={item.desc}
                    key={item.id}
                    itemQuantity={item.itemQuantity}
                  />
                );
              })}
            </SectionContainer>

            <SectionContainer>
              <SectionTitle font="bold" size="xlarge">
                Starters
              </SectionTitle>
              {
                <RestDetailsPopularCard
                  title={data.starters.title}
                  desc={data.starters.desc}
                  img={data.starters.img}
                  popular={data.starters.popular}
                  key={data.starters.id}
                />
              }
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Salads</SectionTitle>

              {data.salads.map((item) => {
                return (
                  <RestDetailsPopularCard
                    title={item.title}
                    price={item.price}
                    desc={item.desc}
                    key={item.id}
                    popular={item.popular}
                  />
                );
              })}
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Our Special Pizza</SectionTitle>

              {data.ourSpecialPizza.map((item) => {
                return (
                  <RestDetailsPopularCard
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    desc={item.desc}
                    key={item.id}
                    popular={item.popular}
                  />
                );
              })}
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Mischelaneous </SectionTitle>

              {data.mischelaneous.map((item) => {
                return (
                  <RestDetailsPopularCard
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    desc={item.desc}
                    key={item.id}
                    popular={item.popular}
                  />
                );
              })}
            </SectionContainer>

            <InfoContainer>
              <RestTiTle
                text={data.bottomRestName.restTitle}
                style={{ marginBottom: 20 }}
              />
              <RestDetailsCard
                title={data.bottomRestName.title}
                price={data.bottomRestName.price}
                desc={data.bottomRestName.desc}
                key={data.bottomRestName.id}
              />
            </InfoContainer>

            <BottomSaveView>
              <SaveText font="medium" size="medium" color="grey">
                Save US$25. Conditions Applay.
              </SaveText>
            </BottomSaveView>
          </Wrapper>
        </ScrollView>
      )}
    </Container>
  );
};

export default RestaurantDetails;
