import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  userInfo: null,
  userTokenInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      AsyncStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setUserTokenInfo: (state, action) => {
      state.userTokenInfo = action.payload;
      AsyncStorage.setItem("userTokenInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      AsyncStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout, setUserTokenInfo } = authSlice.actions;

export const initializeAuth = () => async (dispatch) => {
  try {
    const storedUserInfo = await AsyncStorage.getItem("userInfo");
    const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
    dispatch(authSlice.actions.setCredentials(userInfo));

    const storedUserTokenInfo = await AsyncStorage.getItem("userTokenInfo");
    const userTokenInfo = storedUserTokenInfo
      ? JSON.parse(storedUserTokenInfo)
      : null;
    dispatch(authSlice.actions.setUserTokenInfo(userTokenInfo));
  } catch (error) {
    console.log("Error initializing auth:", error);
  }
};

export default authSlice.reducer;
