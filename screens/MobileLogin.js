import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";

const MobileLogin = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handlePress = () => {
    navigation.navigate("ConfirmOtp"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className=" bg-white h-screen flex-col pl-12 justify-evenly">
        <View className="items-start pt-20">
          <Image
            className="h-20 w-20"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
        </View>

        <View className="h-full justify-center pb-20 gap-2">
          <Text className="text-3xl pb-3">Enter mobile number</Text>
          <View className="flex flex-row items-center font-semibold">
            <Text className="p-2 h-16 text-lg  border-t-2 border-l-2 border-b-2  border-solid">
              +91
            </Text>
            <TextInput
              className=" items-center p-2 h-16 text-lg border-2 border-solid"
              placeholder="Enter your 10 digit mobile number"
              keyboardType="phone-pad"
            />
          </View>
          <Text className=" text-sm pb-3 ">
            You will receive OTO on your mobile
          </Text>
          <TouchableOpacity
            onPress={handlePress}
            className="flex-row justify-center items-center block rounded-md bg-black w-36 py-3 text-center text-sm font-normal text-white shadow-sm"
          >
            <Text className="text-white text-lg font-medium text-center">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MobileLogin;
