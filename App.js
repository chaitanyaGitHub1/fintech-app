import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen.js";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import MobileLogin from "./screens/MobileLogin.js";
import ConfirmOtp from "./screens/ConfirmOtp.js";

import AddMortgage from "./screens/AddMortgage.js";
import BecomeLender from "./screens/BecomeLender.js";
import LendersScroll from "./screens/LendersScroll.js";
import BorrowerScroll from "./screens/BorrowerScroll.js";
import LenderDetail from "./screens/LenderDetail.js";
import BorrowerDetail from "./screens/BorrowerDetail.js";
import { Provider } from "react-redux";
import store from "./store.js";
import UserRegister from "./screens/RegisterUser.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="MobileLogin" component={MobileLogin} />
          <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="UserRegister" component={UserRegister} />
          <Stack.Screen
            name="AddMortgage"
            options={{ title: "Add item to mortgage" }}
            component={AddMortgage}
          />
          <Stack.Screen
            name="BecomeLender"
            options={{ title: "Become a lender" }}
            component={BecomeLender}
          />
          <Stack.Screen name="LendersScroll" component={LendersScroll} />
          <Stack.Screen name="BorrowerScroll" component={BorrowerScroll} />
          <Stack.Screen name="LenderDetail" component={LenderDetail} />
          <Stack.Screen name="BorrowerDetail" component={BorrowerDetail} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
