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

const ConfirmOtp = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handlePress = () => {
    navigation.navigate("HomeScreen"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
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

        <View className="h-full  justify-center pb-20 gap-2">
          <Text className="text-3xl pb-3">Confirm OTP</Text>
          <View className="flex flex-row w-full pr-8 items-center font-semibold">
            <TextInput
              className=" items-center w-full p-2 h-16 text-lg border-2 border-solid"
              placeholder="Enter your 6 digit otp"
              keyboardType="phone-pad"
            />
          </View>
          <Text className="text-sm pb-3">Resend OTP in 30 Seconds</Text>
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

export default ConfirmOtp;
