import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLoginMutation } from "../slices/userApiSlice";

const MobileLogin = () => {
  const navigation = useNavigation();

  const [login, { isLoading }] = useLoginMutation();
  const [mobile, setMobile] = useState("");

  const onSubmit = async () => {
    console.log(mobile);

    if (mobile) {
      try {
        const res = await login({ mobile }).unwrap();
        console.log(res);
        if (res.statusCode == 200) {
          navigation.navigate("ConfirmOtp", {
            otpToken: res.response.otpToken,
            verifyType: "LOGIN",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 ">
      <View className=" bg-white h-screen flex-col pl-12 justify-evenly">
        <View className="items-start pt-20">
          <Image
            className="h-20 w-20"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
        </View>

        <View className="h-full justify-center pb-20 gap-2">
          <Text className="text-xl pb-3">Enter mobile number</Text>
          <View className="flex flex-row items-center font-semibold">
            <Text className="p-2 h-16 text-lg  border-t-2 border-l-2 border-b-2  border-solid">
              +91
            </Text>

            <TextInput
              className="items-center p-2 h-16 w-full text-sm border-2 border-solid"
              placeholder="Enter your 10 digit mobile number"
              // style={{fontSize:12}}
              onChangeText={(text) => setMobile(text)}
              keyboardType="phone-pad"
              value={mobile}
            />
          </View>
          <Text className=" text-sm pb-3 ">
            You will receive OTO on your mobile
          </Text>
          <TouchableOpacity
            onPress={onSubmit}
            className="flex-row justify-center ite  ``ms-center block rounded-md bg-black w-36 py-3 text-center text-sm font-normal text-white shadow-sm"
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
