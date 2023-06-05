import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import LenderCard from "./LenderCard";
import { useNavigation } from "@react-navigation/native";

const Lenders = () => {
  const navigation = useNavigation();

  const handleLenderCard = () => {
    navigation.navigate("LenderDetail"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

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
        <TouchableOpacity onPress={handleLenderCard}>
          <LenderCard
            id="122"
            imgUrl="https://links.papareact.com/gn7"
            title="HDFC"
            location="New Nallakunta"
          /> 
        </TouchableOpacity>
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
