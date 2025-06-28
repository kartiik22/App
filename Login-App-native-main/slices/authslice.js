import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      AsyncStorage.setItem("token", action.payload); // Save token in AsyncStorage
    },
    logout: (state) => {
      state.token = null;
      AsyncStorage.removeItem("token"); // Remove token
    },
    setTokenFromStorage: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { login, logout, setTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;
