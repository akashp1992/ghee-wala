import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    slide: 0,
  },
  reducers: {
    gotoLeft: (state) => {
      state.slide = state.slide > 0 ? state.slide - 1 : 2;
    },
    gotoRight: (state) => {
      state.slide = state.slide < 2 ? state.slide + 1 : 0;
    },
  },
});

export const { gotoLeft, gotoRight } = sliderSlice.actions;
export default sliderSlice.reducer;

// const initialState = 0;
// const changeTheSlider = (state = initialState, action) => {
//   switch (action.type) {
//     case "LEFT":
//         return (state = state > 0 ? state - 1 : 2);
//     case "RIGHT":
//         return (state = state < 2 ? state + 1 : 0);
//     default:
//       return state;
//   }
// };

// export default changeTheSlider;
