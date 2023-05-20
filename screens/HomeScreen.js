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
import Borrowers from "../components/Borrowers";
import SectionHeading from "../components/SectionHeading";
import Lenders from "../components/Lenders";
import InitiateButton from "../components/InitiateButton";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handlePress = () => {
    navigation.navigate("BecomeLender"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  const handleLendersPress = () => {
    navigation.navigate("LendersScroll"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  return (
    <SafeAreaView className="bg-white pt-5">
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
        <AntDesign name="user" size={24} color="black" />
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

      <ScrollView>
        <View className="py-2">
          <InitiateButton
            title="Get money from mortgage"
            screenName="AddMortgage"
          />

          <InitiateButton title="Become a lender" screenName="BecomeLender" />
        </View>

        <TouchableOpacity onPress={handlePress}>
          <SectionHeading
            title={"Borrowers"}
            description={"All borrowers you can see"}
          />
        </TouchableOpacity>

        <Borrowers />

        <TouchableOpacity onPress={handleLendersPress}>
          <SectionHeading
            title={"Lenders"}
            description={"All Lenders you can see"}
          />
        </TouchableOpacity>

        <Lenders />
        <View className=" h-40 flex-1 bg-transparent "></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
