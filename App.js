import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen.js";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import MobileLogin from "./screens/MobileLogin.js";
import ConfirmOtp from "./screens/ConfirmOtp.js";
import HomeScreenEx from "./screens/HomeScreenEx.js";
import AddMortgage from "./screens/AddMortgage.js";
import BecomeLender from "./screens/BecomeLender.js";
import LendersScroll from "./screens/LendersScroll.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="MobileLogin" component={MobileLogin} />
        <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddMortgage"  options={{ title: 'Add item to mortgage' }} component={AddMortgage} />
        <Stack.Screen name="BecomeLender"  options={{ title: 'Become a lender' }} component={BecomeLender} />
        <Stack.Screen name="LendersScroll" component={LendersScroll} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
