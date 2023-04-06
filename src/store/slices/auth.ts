import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: any;
}

const cookies = new Cookies();
const token = cookies.get("token");

const initialState: AuthState = {
  token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
    setUnauthenticated: (state) => {
      state.token = "";
    },
  },
});

export const { setUnauthenticated, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
