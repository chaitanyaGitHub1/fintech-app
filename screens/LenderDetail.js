import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const LenderDetail = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="m-4 h-full flex-col">
        <Image
          source={{
            uri: "https://links.papareact.com/gn7",
          }}
          className="bg-white rounded-xl w-full h-52"
        />

        <View className="flex flex-col gap-4 mt-1">
          <Text className="font-medium text-xl">IDFC First Bank</Text>
          <Text className="font-normal text-sm">
            We can offer up to 50 Lakhs of amount
          </Text>
          <Text className="font-normal text-sm">
            No 1/8/702/5 to 18, G3, Pakhal Plaza Shankar Mutt, Vidya Nagar,
            Hyderabad, Telangana 500044
          </Text>
          <Text className="font-normal text-sm">022 6846 1208</Text>
          <Text className="font-normal text-sm">know@idfc.com</Text>
          <Text className="font-normal text-sm">All type of assets</Text>
          <Text className="font-normal text-sm">Rs 500000</Text>
          <TouchableOpacity
            // onPress={handlePress}
            className="bg-black rounded-md w-28 p-2 text-center "
          >
            <Text className="text-white text-sm my-1 font-medium text-center">
              Chat
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LenderDetail;
