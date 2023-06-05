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
import SearchAndLocation from "../components/SearchAndLocation";
import BorrowerInnerCard from "../components/BorrowerInnerCard";

const BorrowerScroll = () => {
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
      <View className="bg-white h-screen flex-col">
        <SearchAndLocation />
        <View className="mx-2">
          <Text className="font-normal text-lg">borrower's near you </Text>
          <ScrollView>
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
            <BorrowerInnerCard
              id="122"
              imgUrl="https://links.papareact.com/gn7"
              title="HDFC"
              location="New Nallakunta"
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BorrowerScroll;
