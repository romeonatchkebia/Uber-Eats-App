import { View, StyleSheet } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ImageBackground } from "react-native";

import ImageViewer from "../atoms/ImageViewer";
import * as IMAGES from "../../constants/Images";

const { height } = Dimensions.get("screen");

const CustomDrawer = ({ ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={IMAGES.drawerBackgroundImage}
        style={{ height: 150 }}
      >
        <ImageViewer
          source={IMAGES.drawerProfileImage}
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
    width: height * 0.153,
    height: height * 0.153,
    borderRadius: height * 0.082,
    position: "absolute",
    left: height * 0.0763,
    top: height * 0.0763,
  },
});

export default CustomDrawer;
