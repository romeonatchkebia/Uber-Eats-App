import React from "react";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import styled from "styled-components";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled.View``;

const Map = styled(MapView)`
  width: ${windowWidth / 1.1}px;
  height: ${windowHeight / 2}px;
`;

const GoogleMap = () => {
  return (
    <Container>
      <Map
        initialRegion={{
          latitude: 41.72,
          longitude: 44.8,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
      />
    </Container>
  );
};

export default GoogleMap;
