import React from "react";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import TextViewer from "../atoms/TextViewer";

const Container = styled(Screen)``;

const Text = styled(TextViewer)`
  margin-top: -150px;
`;

const Notifications = ({ navigation }) => {
  return (
    <Container>
      <Text text="Some Notifications" visible={true} />
    </Container>
  );
};

export default Notifications;
