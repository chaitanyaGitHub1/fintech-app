import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const InitiateButton = ({ title, screenName }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(screenName); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  return (
    <View className=" bg-white px-4 py-1 mx-2 my-1 border  flex flex-row justify-between items-center  rounded-2xl border-solid-2 border-gray-300 shadow-lg shadow-gray-900">
      <Text className=" text-base ">{title}</Text>
      <TouchableOpacity
        onPress={handlePress}
        className="flex-row justify-center items-center block rounded-3xl bg-black w-28 p-2 text-center "
      >
        <Text className="text-white text-sm my-1 font-medium text-center">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitiateButton;
