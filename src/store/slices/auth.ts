import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const token = cookies.get("token");

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUnauthenticated: (state) => {
      state.token = "";
    },
  },
});

export const { setUnauthenticated } = authSlice.actions;
export default authSlice.reducer;
