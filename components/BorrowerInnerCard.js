import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const BorrowerInnerCard = ({ imgUrl, location, title, id }) => {
  return (
    <View className="bg-white rounded-2xl p-2 flex-row shadow-xl  shadow-gray-900 my-1 items-center ">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="bg-white rounded-full w-24 h-24"
      />

      <View className="flex flex-col pl-4 w-full">
        <Text className="pt-2 font-medium text-lg">{title}</Text>
        <View className="flex flex-row gap-4">
          <Text className="font-medium text-sm text-gray-600">{location}</Text>
          <MaterialIcons name="verified" size={24} color="green" />
        </View>
      </View>
    </View>
  );
};

export default BorrowerInnerCard;
