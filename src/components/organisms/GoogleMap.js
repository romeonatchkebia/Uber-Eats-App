import React, { useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Dimensions, Image } from "react-native";
import styled from "styled-components";

import * as IMAGES from "../../constants/Images";

const { width, height } = Dimensions.get("screen");

const Container = styled.View``;

const Map = styled(MapView)`
  width: ${width / 1.1}px;
  height: ${height / 2}px;
`;

const GoogleMap = ({ ...props }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 41.71525,
    longitude: 44.79001,
    latitudeDelta: 0.032296,
    longitudeDelta: 0.03,
  });

  return (
    <Container>
      <Map initialRegion={mapRegion} {...props}>
        <Marker
          title="John"
          description="Your Location"
          coordinate={{
            latitude: 41.71896214490413,
            longitude: 44.7779244676141,
          }}
        >
          <Image source={IMAGES.Person} />
        </Marker>

        <Marker
          title="Curier"
          description="Curier location"
          coordinate={{
            latitude: 41.712179854772366,
            longitude: 44.803449516634274,
          }}
        >
          <Image source={IMAGES.Pin} />
        </Marker>

        <Polyline
          coordinates={[
            { latitude: 41.712179854772366, longitude: 44.803449516634274 },
            { latitude: 41.71583782612086, longitude: 44.80222459742364 },
            { latitude: 41.71790501698604, longitude: 44.80072176466937 },
            { latitude: 41.715951711709835, longitude: 44.79597928586391 },
            { latitude: 41.71941576042245, longitude: 44.79402030483244 },
            { latitude: 41.7166450379109, longitude: 44.78638145342509 },
            { latitude: 41.71380356981911, longitude: 44.7825311581491 },
            { latitude: 41.71452604290658, longitude: 44.780049233423625 },
            { latitude: 41.71616738693164, longitude: 44.778686951311585 },
            { latitude: 41.71749713159713, longitude: 44.77868684378398 },
            { latitude: 41.71897732678653, longitude: 44.77832802706259 },
            { latitude: 41.71896214490413, longitude: 44.7779244676141 },
          ]}
        />
      </Map>
    </Container>
  );
};

export default GoogleMap;
