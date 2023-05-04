import React, { useState } from "react";
import styled from "styled-components";
import { Octicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const SearchContainer = styled.View`
  flex-direction: row;
  background-color: #eeeeee;
  border-radius: 100px;
  gap: 15px;
  height: 70px;
  padding: 20px;
`;

const InputText = styled.TextInput`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
