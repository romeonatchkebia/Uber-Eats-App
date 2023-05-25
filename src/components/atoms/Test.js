import React from "react";
import { ScrollView, SectionList, Text } from "react-native";

const Test = () => {
  const sections = [
    {
      title: "Section 1",
      data: ["Item 1", "Item 2", "Item 3"],
    },
    {
      title: "Section 2",
      data: ["Item 4", "Item 5", "Item 6"],
    },
  ];

  return (
    <ScrollView>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
        scrollEnabled={false} // Disable scrolling behavior of SectionList
      />
    </ScrollView>
  );
};

export default Test;
