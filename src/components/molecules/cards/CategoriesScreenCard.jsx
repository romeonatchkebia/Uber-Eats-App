import { Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import NewText from "../../atoms/NewText";
import SectionDivider from "../../atoms/SectionDevider";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  margin: ${width * 0.025}px 0;
`;

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: ${({ icon }) => (icon ? "" : "space-between")};
  gap: ${({ icon }) => (icon ? width * 0.06 : "")}px;
  margin-bottom: ${width * 0.025}px;
`;

const Left = styled.View``;

const Middle = styled.View``;

const Right = styled.View``;

const Devider = styled(SectionDivider)`
  height: 1px;
`;

const CategoriesScreenCard = ({ imgUrl, title, icon }) => {
  return (
    <Container>
      {title && (
        <Wrapper icon={icon}>
          <Left>{!icon ? <Image source={imgUrl} /> : icon}</Left>

          <Middle>
            <NewText size="medium">{title}</NewText>
          </Middle>

          {imgUrl && (
            <Right>
              <Ionicons name="chevron-forward" size={width >= 350 ? 26 : 18} />
            </Right>
          )}
        </Wrapper>
      )}

      {title && <Devider />}
    </Container>
  );
};

export default CategoriesScreenCard;
