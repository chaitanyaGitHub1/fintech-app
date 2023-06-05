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
import { useUploadImageMutation } from "../slices/serviceApiSlice";

const AddMortgage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [uploadImage, { isLoading }] = useUploadImageMutation();

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

  const handlePickAndUpload = async () => {
    // No permissions request is necessary for launching the image library

    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.uri);
    } else {
      return;
    }

    uploadImage(pickerResult.uri)
      .unwrap()
      .then((response) => {
        // Handle successful image upload
        console.log("Image upload successful:", response);
        setUploadedImageUrl(response.url);
      })
      .catch((error) => {
        // Handle image upload error
        console.error("Image upload error:", error);
      });
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white h-screen flex-col mx-3">
        <ScrollView>
          <Text className="pb-3">Add item image</Text>
          <View className="flex flex-row gap-3 items-start">
            <TouchableOpacity
              onPress={handlePickAndUpload}
              className="flex justify-center items-center border-dashed border-2 border-black  bg-white h-32 w-24 p-2 text-center"
            >
              <Entypo name="plus" size={44} color="black" />
            </TouchableOpacity>
            {uploadedImageUrl && (
              <Image
                source={{ uri: uploadedImageUrl }}
                style={{ width: 200, height: 200 }}
              />
            )}
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
