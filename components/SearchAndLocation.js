import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";

const SearchAndLocation = () => {
  return (
    <View>
      <View className=" flex-row bg-white pb-3 items-center mx-2 space-x-2 overflow-y-auto ">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full "
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className=" font-bold text-gray-400 text-sx "></Text>
          <Text className=" font-bold text-xl ">
            Current Location
            <EvilIcons name="chevron-down" size={24} color="black" />
          </Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <AntDesign name="search1" size={20} color="gray" />

          <TextInput
            placeholder="lender and borrowers"
            keyboardType="default"
          />
        </View>
        <Feather name="sliders" size={24} color="black" />
      </View>
    </View>
  );
};

export default SearchAndLocation;
