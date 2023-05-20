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
  
  const LendersScroll = () => {
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
         
  
       
        </View>
      </SafeAreaView>
    );
  };
  
  export default LendersScroll;
  