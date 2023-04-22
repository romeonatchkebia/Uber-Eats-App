import React from "react";

import styled from "styled-components";
import Screen from "../atoms/Screen";
import TextViewer from "../atoms/TextViewer";

const Container = styled(Screen)``;

const Text = styled(TextViewer)`
  margin-top: -150px;
`;

const Orders = ({ navigation }) => {
  return (
    <Container>
      <Text text="You Can Order Anything You Want" visible={true} />
    </Container>
  );
};

export default Orders;
