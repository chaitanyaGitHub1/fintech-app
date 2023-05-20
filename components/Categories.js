import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator
    >
      <CategoryCard
        id="123"
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoryCard
        id="122"
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoryCard
        id="124"
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
    </ScrollView>
  );
};

export default Categories;
