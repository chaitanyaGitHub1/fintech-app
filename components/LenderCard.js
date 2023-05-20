import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const LenderCard = ({ imgUrl, location, title, id }) => {
  return (
    <View className="bg-white rounded-2xl  border-1 border-gray-900 shadow-2xl  shadow-gray-900  p-1 flex-col gap-1 mr-4 items-center ">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="bg-white rounded-lg w-36 h-28"
      />
      <Text className="pt-2 font-medium text-lg">{title}</Text>
      <Text className="font-medium text-sm text-gray-600">{location}</Text>
      <MaterialIcons name="verified" size={24} color="green" />
    </View>
  );
};

export default LenderCard;
