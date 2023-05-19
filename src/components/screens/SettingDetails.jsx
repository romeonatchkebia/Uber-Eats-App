import React from "react";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import NewText from "../atoms/NewText";

const Container = styled(Screen)``;

const SettingDetails = () => {
  return (
    <Container>
      <NewText></NewText>
    </Container>
  );
};

export default SettingDetails;
