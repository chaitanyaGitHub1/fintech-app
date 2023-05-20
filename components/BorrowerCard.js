import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const BorrowerCard = ({ imgUrl, location, title, id }) => {
  return (
    <View className="bg-white rounded-2xl  border-2 border-gray-900 shadow-2xl  shadow-gray-900 mr-3  p-4 flex-col gap-1 items-center ">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="bg-white rounded-full w-24 h-24"
      />
      <Text className="pt-2 font-medium text-lg">{title}</Text>
      <Text className="font-medium text-sm text-gray-600">{location}</Text>
      <MaterialIcons name="verified" size={24} color="green" />
    </View>
  );
};

export default BorrowerCard;
