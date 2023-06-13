import { Dimensions, Pressable, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";
import ConvenienceStoresCard from "../molecules/cards/ConvenienceStoresCard";
import SectionDevider from "../atoms/SectionDevider";
import { ConvenienceData, ConvenienceStores } from "../../data/appData";
import ConvenienceCard from "../molecules/cards/ConvenienceCard";

const { height, width } = Dimensions.get("screen");

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
  padding-bottom: 10%;
`;

const RestTiTle = styled(NewText)`
  margin-top: ${height * 0.009}px;
`;

const Convenience = ({ navigation }) => {
  const [data, setData] = useState(ConvenienceData);
  const [stores, setStores] = useState(ConvenienceStores);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              size={width >= 350 ? 26 : 18}
              color="black"
            />
          </Pressable>

          <RestTiTle font="bold" size="xxlarge">
            Convenience
          </RestTiTle>

          <RestTiTle
            font="bold"
            size="xlarge"
            style={{ marginTop: width * 0.05 }}
          >
            Featured stores
          </RestTiTle>

          <FlatList
            data={stores}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ConvenienceStoresCard
                  background={item.background}
                  time={item.time}
                  logo={item.logo}
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Wrapper>

        <SectionDevider />

        <Wrapper>
          {data.map((item) => {
            return (
              <ConvenienceCard
                title={item.title}
                imgUrl={item.imgUrl}
                price={item.price}
                time={item.time}
                desc={item.desc}
                key={item.id}
              />
            );
          })}
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default Convenience;
