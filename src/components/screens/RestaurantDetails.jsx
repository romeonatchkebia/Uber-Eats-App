import React, { useState, useEffect } from "react";
import { View, Image, ScrollView } from "react-native";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import * as Progress from "react-native-progress";
import * as IMAGES from "../../constants/Images";
import * as ROUTES from "../../constants/Routs";

import RestDetailsCard from "../molecules/cards/RestDetailsCard";
import DeliveryPickupBtns from "../atoms/DeliveryPickupBtns";
import RestDetailsPopularCard from "../molecules/cards/RestDetailsPopularCard";
import GreyBtnWithIcon from "../atoms/GreyBtnWithIcon";

const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Screen)`
  margin: 15px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const InfoContainer = styled.View`
  width: 80%;
`;

const RestTiTle = styled(NewText)`
  line-height: 36px;
`;

const RestInfoView = styled.View`
  flex-direction: row;
`;

const RestInfo = styled(NewText)`
  line-height: 20px;
`;

const WorkingInfo = styled(NewText)`
  line-height: 20px;
`;

const RightContainer = styled.Pressable`
  justify-content: flex-end;
`;

const RightArrow = styled.Image`
  margin-bottom: 25px;
  margin-right: 20px;
`;

const ButtonsViewContainer = styled.View`
  margin-top: 18px;
  justify-content: center;
  gap: 18px;
`;

const SwitcherContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  height: 55px;
  flex-direction: row;
  padding: 5px;
`;

const SectionContainer = styled.View``;

const SectionTitle = styled(NewText)`
  line-height: 36px;
  margin-bottom: 18px;
  margin-top: 23px;
`;

const BottomSaveView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const SaveText = styled(NewText)`
  line-height: 20px;
  text-align: center;
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
              <RestTiTle font="bold" size="xlarge" style={{ marginTop: 30 }}>
                {rest.name}
              </RestTiTle>

              <RestInfoView>
                <View style={{ marginRight: 3 }}>
                  <Image source={IMAGES.StarIcon} />
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
              <RightArrow source={IMAGES.RightArrow} />
            </RightContainer>
          </HeaderContainer>

          <ButtonsViewContainer>
            <GreyBtnWithIcon title="Group order" img={IMAGES.GroupImage} />
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
                  key={uuidv4()}
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
            <SaveText font="medium" size="medium" color="grey">
              Save US$25. Conditions Applay.
            </SaveText>
          </BottomSaveView>
        </ScrollView>
      )}
    </Container>
  );
};

export default RestaurantDetails;
