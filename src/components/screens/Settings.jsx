import { View, Text } from "react-native";
import React from "react";

import * as ROUTES from "../../constants/Routs";
import Button from "../atoms/Button";

const Settings = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      />
    </View>
  );
};

export default Settings;
