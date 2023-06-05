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

import Borrowers from "../components/Borrowers";
import SectionHeading from "../components/SectionHeading";
import Lenders from "../components/Lenders";
import InitiateButton from "../components/InitiateButton";
import SearchAndLocation from "../components/SearchAndLocation";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const navigation = useNavigation();

  const userTokenInfo = useSelector((state) => state.auth.userTokenInfo);


  useLayoutEffect(() => {
    console.log(userTokenInfo, "userTokenInfo")
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleBorrowerPress = () => {
    navigation.navigate("BorrowerScroll"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  const handleLendersPress = () => {
    navigation.navigate("LendersScroll"); // Replace 'AnotherScreen' with the name of the screen you want to navigate to
  };

  return (
    <SafeAreaView className="bg-white pt-5">
      <SearchAndLocation />
      <ScrollView>
        <View className="py-2">
          <InitiateButton
            title="Get money from mortgage"
            screenName="AddMortgage"
          />

          <InitiateButton title="Become a lender" screenName="BecomeLender" />
        </View>

        <TouchableOpacity onPress={handleBorrowerPress}>
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
