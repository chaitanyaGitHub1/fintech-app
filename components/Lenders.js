import { View, Text, ScrollView } from "react-native";
import React from "react";
import LenderCard from "./LenderCard";

const Lenders = () => {
  return (
    <View className="pb-2">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator
      >
        <LenderCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="HDFC"
          location="New Nallakunta"
        />
        <LenderCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="HDFC"
          location="New Nallakunta"
        />
        <LenderCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="HDFC"
          location="New Nallakunta"
        />
        <LenderCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="HDFC"
          location="New Nallakunta"
        />
        <LenderCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="HDFC"
          location="New Nallakunta"
        />
      </ScrollView>
    </View>
  );
};

export default Lenders;
