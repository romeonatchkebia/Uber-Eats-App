import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { Octicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const { width, height } = Dimensions.get("screen");

const SearchContainer = styled.View`
  flex-direction: row;
  background-color: #eeeeee;
  border-radius: ${width * 0.13}px;
  gap: ${width * 0.038}px;
  height: ${height * 0.082}px;
  padding: ${height * 0.023}px;
`;

const InputText = styled.TextInput`
  font-style: normal;
  font-weight: 400;
  font-size: ${height * 0.023}px;
`;

function SearchComponent({ label, placeholder }) {
  const [input, setInput] = useState("");

  return (
    <SearchContainer>
      <Pressable onPress={() => {}}>
        <Octicons name="search" size={25} color="black" />
      </Pressable>

      <InputText
        placeholder={placeholder}
        value={input}
        onChangeText={setInput}
      >
        {label}
      </InputText>
    </SearchContainer>
  );
}

export default SearchComponent;
