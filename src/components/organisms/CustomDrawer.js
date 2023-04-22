import { View, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import styled from "styled-components";
import { ImageBackground } from "react-native";

import ImageViewer from "../atoms/ImageViewer";
import * as Images from "../../constants/Images";

const CustomDrawer = ({ ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={Images.drawerBackgroundImage}
        style={{ height: 150 }}
      >
        <ImageViewer
          source={Images.drawerProfileImage}
          style={styles.profileImg}
        />
      </ImageBackground>
      <View style={{ marginTop: 50 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    width: 130,
    height: 130,
    borderRadius: 70,
    position: "absolute",
    left: 65,
    top: 65,
  },
});

export default CustomDrawer;
