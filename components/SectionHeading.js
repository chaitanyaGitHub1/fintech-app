import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SectionHeading = ({ title, description }) => {
  return (
    <View className=' bg-gray-900 pb-2 mx-4 my-1 border border-solid-2 rounded-md  border-gray-300 shadow-lg shadow-black ' >
      <View className="mt-1 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg text-white">{title}</Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </View>
      <Text className="text-sx text-white px-4">{description}</Text>
    </View>
  );
};

export default SectionHeading;
