import { Image, View, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import NewText from "../../atoms/NewText";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: ${width * 0.025}px ${width * 0.013}px;
`;

const TextView = styled.View``;

const Title = styled(NewText)``;

const SubTitleTxt = styled(NewText)``;

const AddView = styled.View``;

const DeliveryDetailsCard = ({ title, subTitle, iconSource }) => {
  return (
    <Container>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <AddView>
          <Image source={iconSource} />
        </AddView>

        <TextView>
          <Title font="medium" size="medium">
            {title}
          </Title>

          <SubTitleTxt color="grey">{subTitle}</SubTitleTxt>
        </TextView>
      </View>

      <AddView>
        <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
      </AddView>
    </Container>
  );
};

export default DeliveryDetailsCard;
