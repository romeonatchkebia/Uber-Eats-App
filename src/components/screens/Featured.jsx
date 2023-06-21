import React, { useState } from "react";
import { FlatList, Dimensions } from "react-native";
import styled from "styled-components";

import * as ROUTS from "../../constants/Routs";

import NewText from "../atoms/NewText";
import FeaturedCard from "../molecules/cards/FeaturedCard";
import { FeaturedList } from "../../data/appData";

const { width } = Dimensions.get("screen");

const Container = styled.View``;

const Wrapper = styled.View`
  margin: ${width * 0.038}px;
`;

const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SeeAllBtnView = styled.Pressable``;

const SeeAllBtn = styled(NewText)``;

const SectionTitle = styled(NewText)`
  margin: ${width * 0.076}px 0;
`;

const Featured = ({ navigation }) => {
  const [data, setData] = useState(FeaturedList);

  return (
    <Container>
      <Wrapper>
        <>
          {data[0].title && (
            <SectionTitleView>
              <SectionTitle size="large" font="medium">
                {data[0].title}
              </SectionTitle>

              <SeeAllBtnView>
                {data[0].title && (
                  <SeeAllBtn
                    font="medium"
                    size="medium"
                    secTitle={data[0].title}
                  >
                    See All
                  </SeeAllBtn>
                )}
              </SeeAllBtnView>
            </SectionTitleView>
          )}

          <FlatList
            data={data[0].data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return (
                <FeaturedCard
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  imgUrl={item.url}
                  onPress={() =>
                    navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                      item,
                    })
                  }
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>

        <>
          {data[1].title && (
            <SectionTitleView>
              <SectionTitle size="large" font="medium">
                {data[1].title}
              </SectionTitle>

              <SeeAllBtnView>
                {data[1].title && (
                  <SeeAllBtn
                    font="medium"
                    size="medium"
                    secTitle={data[1].title}
                  >
                    See All
                  </SeeAllBtn>
                )}
              </SeeAllBtnView>
            </SectionTitleView>
          )}

          <FlatList
            data={data[1].data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return (
                <FeaturedCard
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  imgUrl={item.url}
                  onPress={() =>
                    navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                      item,
                    })
                  }
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>

        <>
          {data[2].title && (
            <SectionTitleView>
              <SectionTitle size="large" font="medium">
                {data[2].title}
              </SectionTitle>

              <SeeAllBtnView>
                {data[2].title && (
                  <SeeAllBtn
                    font="medium"
                    size="medium"
                    secTitle={data[2].title}
                  >
                    See All
                  </SeeAllBtn>
                )}
              </SeeAllBtnView>
            </SectionTitleView>
          )}

          <FlatList
            data={data[2].data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return (
                <FeaturedCard
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  imgUrl={item.url}
                  onPress={() =>
                    navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                      item,
                    })
                  }
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>

        <>
          {data[3].title && (
            <SectionTitleView>
              <SectionTitle size="large" font="medium">
                {data[3].title}
              </SectionTitle>

              <SeeAllBtnView>
                {data[3].title && (
                  <SeeAllBtn
                    font="medium"
                    size="medium"
                    secTitle={data[3].title}
                  >
                    See All
                  </SeeAllBtn>
                )}
              </SeeAllBtnView>
            </SectionTitleView>
          )}

          <FlatList
            data={data[3].data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return (
                <FeaturedCard
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  imgUrl={item.url}
                  onPress={() =>
                    navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                      item,
                    })
                  }
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>

        <>
          {data[4].title && (
            <SectionTitleView>
              <SectionTitle size="large" font="medium">
                {data[4].title}
              </SectionTitle>

              <SeeAllBtnView>
                {data[4].title && (
                  <SeeAllBtn
                    font="medium"
                    size="medium"
                    secTitle={data[4].title}
                  >
                    See All
                  </SeeAllBtn>
                )}
              </SeeAllBtnView>
            </SectionTitleView>
          )}

          <FlatList
            data={data[4].data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return (
                <FeaturedCard
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  imgUrl={item.url}
                  onPress={() =>
                    navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                      item,
                    })
                  }
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>

        <>
          {data[5].title && (
            <SectionTitleView>
              <SectionTitle size="large" font="medium">
                {data[5].title}
              </SectionTitle>

              <SeeAllBtnView>
                {data[5].title && (
                  <SeeAllBtn
                    font="medium"
                    size="medium"
                    secTitle={data[5].title}
                  >
                    See All
                  </SeeAllBtn>
                )}
              </SeeAllBtnView>
            </SectionTitleView>
          )}

          <FlatList
            data={data[5].data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return (
                <FeaturedCard
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  imgUrl={item.url}
                  onPress={() =>
                    navigation.navigate(ROUTS.ITEM_DETAILS_SCREEN, {
                      item,
                    })
                  }
                />
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>
      </Wrapper>
    </Container>
  );
};

export default Featured;
