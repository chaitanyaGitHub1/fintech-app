import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import BorrowerCard from "./BorrowerCard";

const Borrowers = () => {
  return (
    <View className='pb-2'>
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator
  >
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
