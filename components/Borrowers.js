import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import BorrowerCard from "./BorrowerCard";
import { useNavigation } from "@react-navigation/native";


const Borrowers = () => {
  const navigation = useNavigation();

  const handleBorrowerCard = () => {
    navigation.navigate("BorrowerDetail"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
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
        <TouchableOpacity onPress={handleBorrowerCard}>
          <BorrowerCard
            id="122"
            imgUrl="https://links.papareact.com/gn7"
            title="Rajesh"
            location="New Nallakunta"
          />
        </TouchableOpacity>

        <BorrowerCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="Rajesh"
          location="New Nallakunta"
        />
        <BorrowerCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="Rajesh"
          location="New Nallakunta"
        />
        <BorrowerCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="Rajesh"
          location="New Nallakunta"
        />
        <BorrowerCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="Rajesh"
          location="New Nallakunta"
        />
        <BorrowerCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="Rajesh"
          location="New Nallakunta"
        />
        <BorrowerCard
          id="122"
          imgUrl="https://links.papareact.com/gn7"
          title="Rajesh"
          location="New Nallakunta"
        />
      </ScrollView>
    </View>
  );
};

export default Borrowers;
