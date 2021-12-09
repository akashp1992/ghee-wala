import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null, isFatching: false, isError: false },
  reducers: {
    loginStart: (state) => {
      state.isFatching = true;
    },
    loginSuccess: (state, action) => {
      state.isFatching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isError = true;
      state.isFatching = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
