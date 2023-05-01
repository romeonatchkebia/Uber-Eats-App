import { View, Text, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import { v4 as uuidv4 } from "uuid";
import * as Progress from "react-native-progress";

import RestDetailsCard from "../organisms/RestDetailsCard";
import TextViewer from "../atoms/TextViewer";
import DeliveryPickupBtns from "../atoms/DeliveryPickupBtns";
import RestDetailsPopularCard from "../molecules/RestDetailsPopularCard";

const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Screen)`
  margin: 20px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const InfoContainer = styled.View`
  width: 80%;
`;

const RestTiTle = styled(TextViewer)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

const RestInfoView = styled.View`
  flex-direction: row;
`;

const RestInfo = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const WorkingInfo = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #545454;
`;

const RightContainer = styled.Pressable`
  justify-content: flex-end;
`;

const RightArrow = styled.Image`
  margin-bottom: 25px;
  margin-right: 20px;
`;

const rightArrow = require("../Images/restDetailsVector.png");

const ButtonsViewContainer = styled.View`
  margin-top: 18px;
  justify-content: center;
  gap: 18px;
`;

const GroupOrderView = styled.View``;

const groupImage = require("../Images/Group.png");

const GroupImage = styled.Image``;

const GroupOrderBtn = styled.Pressable`
  align-items: center;
  justify-content: space-evenly;
  background-color: #eeeeee;
  flex-direction: row;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-radius: 40px;
  height: 50px;
  width: 40%;
`;

const GroupOrderBtnText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const SwitcherContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  height: 55px;
  flex-direction: row;
  padding: 5px;
`;

const SectionContainer = styled.View``;

const SectionTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 18px;
  margin-top: 23px;
`;

const starIcon = require("../Images/RatingStar.png");

const BottomSaveView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const SaveText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #4ba457;
`;

const data = {
  restaurant: {
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
    restTitle: "Alcohol - Beer (Must be 21 to Purchase)",
    title: "Russian River Plinty Bottle",
    price: "21.00",
    desc: "Must be 21 to purchase ",
  },

  mostPopular: [
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasasa dsa sadsa da sd asdasdasdas dasdas das das ",
      img: require("../Images/pizza.png"),
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasdasdas das das dasdasdas dasd asd asdsadsa ",
      img: require("../Images/pizza.png"),
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasd asd asd asdasdasdasd sad as dsa d sad sadsadas ",
      img: require("../Images/pizza.png"),
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasd asd asd asdasdasdasd sad as dsa d sad sadsadas ",
      promo: true,
    },
  ],
  pickedForYou: [
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      title: "Rus River Plinty Bottle",
      price: "10.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
      itemQuantity: 12,
    },
  ],
  ourSpecialPizaa: [
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
  ],
  starters: {
    title: "Garlic knots",
    desc: "Priced by add-ons",
    popular: true,
    img: require("../Images/starters-card-image.png"),
  },
  salads: [
    {
      title: "Little Cesar Salad",
      price: "18.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
      popular: true,
    },
    {
      title: "Rocket Salad",
      price: "10.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas ",
    },
  ],
  ourSpecialPizza: [
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasasa dsa sadsa da sd asdasdasdas dasdas das das ",
      img: require("../Images/pizza.png"),
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasdasdas das das dasdasdas dasd asd asdsadsa ",
      img: require("../Images/pizza.png"),
    },
    {
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Description text  sortss, dadas sadasda, asdas, dasdasdas dasdasd asd asd asdasdasdasd sad as dsa d sad sadsadas ",
      img: require("../Images/pizza.png"),
    },
    {
      title: "Happy bithday Pizza",
      price: "21.00",
      desc: "dasdasdasdas dasd as da sd asd sadasdas da sdasdasdasdas das d asdasdasdas",
      popular: true,
    },
  ],
  mischelaneous: [
    {
      title: "Little Cesar Salad",
      price: "18.00",
      popular: true,
    },
    {
      title: "Rocket Salad",
      price: "10.00",
      popular: true,
    },
    {
      title: "Rocket Salad",
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
  ];

  function calcRating(num) {
    if (num > 200) {
      return "200+ Rating";
    } else {
      return num;
    }
  }

  const itemFromHome = route.params;
  const rest = data.restaurant;

  return (
    <Container>
      {isLoading ? (
        <SpinnerView>
          <Progress.CircleSnail size={80} color={["red", "green", "blue"]} />
        </SpinnerView>
      ) : (
        <ScrollView>
          <HeaderContainer>
            <InfoContainer>
              <RestTiTle text={rest.name} style={{ marginTop: 30 }} />

              <RestInfoView>
                <View style={{ marginRight: 3 }}>
                  <Image source={starIcon} />
                </View>
                <RestInfo>
                  {rest.rating}({calcRating(rest.ratingQuantity)}) •{" "}
                  {rest.category} • $$
                </RestInfo>
              </RestInfoView>

              <WorkingInfo>{rest.workingHours}</WorkingInfo>
              <WorkingInfo>Tap for hours info and more </WorkingInfo>
            </InfoContainer>

            <RightContainer>
              <RightArrow source={rightArrow} />
            </RightContainer>
          </HeaderContainer>

          <ButtonsViewContainer>
            <GroupOrderView>
              <GroupOrderBtn>
                <GroupImage source={groupImage} />
                <GroupOrderBtnText>Group order</GroupOrderBtnText>
              </GroupOrderBtn>
            </GroupOrderView>
            <SwitcherContainer>
              {btns.map((btn) => {
                return (
                  <DeliveryPickupBtns
                    Time={btn.value === 0 ? rest.deliveryTime : rest.pickupTime}
                    Distance={
                      btn.value === 0
                        ? rest.deliveryDistance
                        : rest.pickupDistance
                    }
                    title={btn.title}
                    onPress={() => handlePress(btn.value)}
                    key={btn.value}
                    black={btn.value === category ? true : false}
                  />
                );
              })}
            </SwitcherContainer>
          </ButtonsViewContainer>

          <SectionContainer>
            <SectionTitle>Most Popular</SectionTitle>
            {data.mostPopular.map((item) => {
              return (
                <RestDetailsCard
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  desc={item.desc}
                  key={uuidv4()}
                  promo={item.promo}
                />
              );
            })}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Picked for you</SectionTitle>
            {data.pickedForYou.map((item) => {
              return (
                <RestDetailsCard
                  title={item.title}
                  price={item.price}
                  desc={item.desc}
                  key={uuidv4()}
                  itemQuantity={item.itemQuantity}
                />
              );
            })}
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Starters</SectionTitle>
            {
              <RestDetailsPopularCard
                title={data.starters.title}
                desc={data.starters.desc}
                img={data.starters.img}
                popular={data.starters.popular}
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
                  key={uuidv4()}
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
                  key={uuidv4()}
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
                  key={uuidv4()}
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
              key={uuidv4()}
            />
          </InfoContainer>
          <BottomSaveView>
            <SaveText>Save US$25. Conditions Applay.</SaveText>
          </BottomSaveView>
        </ScrollView>
      )}
    </Container>
  );
};

export default RestaurantDetails;
