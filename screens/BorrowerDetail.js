import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const BorrowerDetail = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <ScrollView>
        <View className="m-4 h-full flex-col">
          <Image
            source={{
              uri: "https://links.papareact.com/gn7",
            }}
            className="bg-white rounded-xl w-full h-52"
          />

          <View className="flex flex-col gap-4 mt-1">
            <Text className="font-medium text-xl">volkswagen polo </Text>
            <Text className="font-normal text-sm">
              Excellent Condition, Less Driven, Non Accidental, Original Paint,
              Single Owner, Alloy Wheels, Finance Available, Rear view Camera &
              Service History Available
            </Text>
            <Text className="font-normal text-sm">Car location: Hyderabad</Text>
            <Text className="font-normal text-sm">022 6846 1208</Text>
            <Text className="font-normal text-sm">polo@mail.com</Text>
            <Text className="font-normal text-sm">Auto</Text>
            <Text className="font-normal text-sm">
              Expected Lone Amount 500000
            </Text>

            <Text className="font-bold text-gray-600 text-xl">Profile </Text>

            <View className="flex-row  items-center mr-4">
              <Image
                source={{
                  uri: "https://mir-s3-cdn-cf.behance.net/user/115/ff4d455597273.5c33a4a692ef5.jpg",
                }}
                className=" w-24 h-24"
              />

              <View className="flex-col pl-4 w-full">
                <Text className="pt-2 font-medium text-lg">Naga Raju</Text>
                <View className="flex flex-row gap-4">
                  <Text className="font-medium text-sm text-gray-600">
                    Road No. 10 , Banjara Hills, Hyd , Tel
                  </Text>
                  <MaterialIcons name="verified" size={24} color="green" />
                </View>
              </View>
            </View>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default BorrowerDetail;
