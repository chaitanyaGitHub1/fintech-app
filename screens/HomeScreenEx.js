import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import SectionHeading from "../components/SectionHeading";

const HomeScreenEx = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className=" flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full "
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className=" font-bold text-gray-400 text-sx ">
            Deliver Now!
          </Text>
          <Text className=" font-bold text-xl ">
            Current Location
            <EvilIcons name="chevron-down" size={24} color="cyan" />
          </Text>
        </View>
        <AntDesign name="user" size={24} color="cyan" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <AntDesign name="search1" size={20} color="gray" />

          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <Feather name="sliders" size={24} color="black" />
      </View>

      <ScrollView className="bg-gray-100">
        <Categories />

        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
        title="Featured"
        description="Paid placements from our partners"
        featuredCategory="featured"
      />
      <FeaturedRow
      title="Featured"
      description="Paid placements from our partners"
      featuredCategory="featured"
    />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreenEx;
