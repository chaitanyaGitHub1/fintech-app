import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useVerifyUserOtpMutation } from "../slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setUserTokenInfo } from "../slices/authSlice";

const ConfirmOtp = ({ navigation, route }) => {
  // const navigation = useNavigation();

  const [verifyOtp, { isLoading }] = useVerifyUserOtpMutation();
  const dispatch = useDispatch();
  const [signupOtp, setOtp] = useState("");

  const { otpToken, verifyType } = route.params;

  useLayoutEffect(() => {
    console.log(otpToken, "confirm");
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSubmit = async () => {
    console.log(otpToken, signupOtp, verifyType);
    if (signupOtp) {
      try {
        const res = await verifyOtp({
          otpToken,
          signupOtp,
          verifyType,
        }).unwrap();
        console.log(res);
        if (res.statusCode == 200) {
          dispatch(setUserTokenInfo({ ...res }));
          navigation.navigate("HomeScreen");
        }
      } catch (error) {
        console.log(error);
      }
    }
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
              value={signupOtp}
              onChangeText={(text) => setOtp(text)}
            />
          </View>
          <Text className="text-sm pb-3">Resend OTP in 30 Seconds</Text>
          <TouchableOpacity
            onPress={onSubmit}
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
