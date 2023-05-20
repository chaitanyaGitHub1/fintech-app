import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const AddMortgage = () => {
  const navigation = useNavigation();
  //   const [showPlaceholder, setShowPlaceholder] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white h-screen flex-col mx-3">
        <ScrollView>
          <Text className="pb-3">Add item image</Text>
          <View className="flex flex-row gap-3 items-start">
            <TouchableOpacity
              onPress={pickImage}
              className="flex justify-center items-center border-dashed border-2 border-black  bg-white h-32 w-24 p-2 text-center"
            >
              <Entypo name="plus" size={44} color="black" />
            </TouchableOpacity>
            <View>
              {image && (
                <Image
                  source={{ uri: image }}
                  className="bg-white  w-32 h-28"
                />
              )}
            </View>
          </View>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="items-center pl-4 h-14 text-lg  border-gray-300  rounded-2xl  border-2 mt-4"
                placeholder="Item"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="item"
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className="items-center pl-4 h-14 text-lg  border-gray-300  rounded-2xl  border-2 mt-4"
                placeholder="Description"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="description"
          />

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Address"
                className="items-center pl-4 h-14 text-lg  border-gray-300  rounded-2xl  border-2 mt-4"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="address"
          />

          <View className=" border-gray-300 rounded-2xl border-2  mt-4">
            <Controller
              control={control}
              name="assetType"
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  placeholder="Select asset type"
                  onValueChange={(itemValue) => onChange(itemValue)}
                >
                  <Picker.Item label="Auto mobiles" value="auto" />
                  <Picker.Item label="Housing" value="housing" />
                  <Picker.Item label="Electronics" value="electronics" />
                  <Picker.Item label="Real estate" value="real-estate" />
                  <Picker.Item label="Other" value="others" />
                </Picker>
              )}
            />
          </View>

          <View className=" border-gray-300 rounded-2xl border-2  mt-4">
            <Controller
              control={control}
              name="professionType"
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  placeholder="Select your profession"
                  onValueChange={(itemValue) => onChange(itemValue)}
                >
                  <Picker.Item label="Student" value="student" />
                  <Picker.Item label="Government employee" value="government" />
                  <Picker.Item label="Private employee" value="private" />
                  <Picker.Item label="Business" value="business" />
                  <Picker.Item label="Other" value="others" />
                </Picker>
              )}
            />
          </View>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="flex-row justify-center items-center block w-full rounded-md bg-black mt-3 py-3 text-center text-sm font-normal text-white shadow-sm"
          >
            <Text className="text-white text-lg font-medium text-center">
              Submit
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AddMortgage;
