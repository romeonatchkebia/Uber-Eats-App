import { Image, View } from "react-native";
import React from "react";
import styled from "styled-components";

import NewText from "../../atoms/NewText";
import * as IMAGES from "../../../constants/Images";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 5px;
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
        <Image source={IMAGES.RightArrow} />
      </AddView>
    </Container>
  );
};

export default DeliveryDetailsCard;
