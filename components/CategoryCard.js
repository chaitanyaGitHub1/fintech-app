import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Text } from "react-native";

const CategoryCard = ({ id, imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        source={{
          uri: imgUrl,
        }}
        className=" h-20 w-20 rounded"
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
       {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
