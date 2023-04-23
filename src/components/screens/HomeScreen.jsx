import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import styled from "styled-components";
import TextViewer from "../atoms/TextViewer";
import ImageViewer from "../atoms/ImageViewer";
import Screen from "../atoms/Screen";

const Data = [
  {
    id: 1,
    url: require("../Images/hat.webp"),
    title: "hat",
  },
  {
    id: 2,
    url: require("../Images/shoes.jpg"),
    title: "shoes",
  },
  {
    id: 3,
    url: require("../Images/shirt.webp"),
    title: "shirt",
  },
  {
    id: 4,
    url: require("../Images/teusers.jpg"),
    title: "trausers",
  },
  {
    id: 5,
    url: require("../Images/hat.webp"),
    title: "hat",
  },
  {
    id: 6,
    url: require("../Images/shoes.jpg"),
    title: "shoes",
  },
  {
    id: 7,
    url: require("../Images/shirt.webp"),
    title: "shirt",
  },
];

const Container = styled(Screen)``;

const Item = ({ title, source }) => {
  return (
    <View style={styles.renderView}>
      <TextViewer style={styles.titleText} text={title} visible={true} />
      <ImageViewer style={styles.cardImage} source={source} />
    </View>
  );
};

function HomeScreen() {
  return (
    <Container>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item title={item.title} source={item.url} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  titleText: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  renderView: {
    alignItems: "center",
    backgroundColor: "#59c1e3",
    padding: 20,
    marginBottom: 20,
    width: 250,
    borderRadius: 15,
  },
});

export default HomeScreen;
