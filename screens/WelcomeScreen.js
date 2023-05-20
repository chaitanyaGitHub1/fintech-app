import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MobileLogin"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5 h-screen ">
      <View className="h-full mx-8 gap-20">
        <View className=" flex-col gap-8 ">
          <Image
            className="h-20 w-20"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
          <Text className="text-4xl font-bold text-black">Welcome to WAS</Text>
        </View>

        <View className="flex gap-2 px-8 justify-center items-center">
          <TouchableOpacity
            onPress={handlePress}
            className="flex-row justify-center items-center block w-full rounded-md bg-black  py-3 text-center text-sm font-normal text-white shadow-sm"
          >
            <AntDesign name="mobile1" size={24} color="white" />
            <Text className="text-white text-lg pl-8 font-medium text-center">
              Login with mobile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-center items-center block w-full rounded-md bg-black py-3 text-center text-sm font-normal text-white shadow-sm">
            <AntDesign name="google" size={24} color="white" />
            <Text className="text-white text-lg  pl-8  font-medium text-center">
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-col px-8 ">
          <Text className=" text-lg font-medium">We assure security</Text>
          <Text className="  text-sm font-medium">
            Our FinTech app is designed to revolutionize the way you manage your
            finances.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
