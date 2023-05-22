import React from "react";
import styled from "styled-components";
import * as ImagePicker from "expo-image-picker";

import NewText from "../atoms/NewText";

const Container = styled.Pressable``;

const ImgPicker = ({ title, callback }) => {
  const onPressHandler = async () => {
    const res = await ImagePicker.getMediaLibraryPermissionsAsync();

    if (res.granted) {
      const launchRes = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      callback(launchRes.assets[0].uri);
    } else {
      const requestRes =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (requestRes) {
        const response = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        callback(response.assets[0].uri);
      }
    }
  };

  return (
    <Container onPress={onPressHandler}>
      <NewText>{title}</NewText>
    </Container>
  );
};

export default ImgPicker;
