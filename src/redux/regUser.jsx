import { createSlice } from "@reduxjs/toolkit";

const newUserSlice = createSlice({
  name: "register",
  initialState: {
    currentRegister: null,
    isError: false,
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.currentRegister = action.payload;
    },
    registerFailure: (state) => {
      state.isError = true;
    },
  },
});

export const {registerSuccess,registerFailure}=newUserSlice.actions;
export default newUserSlice.reducer;