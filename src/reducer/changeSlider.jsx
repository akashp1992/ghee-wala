const initialState = 0;
const changeTheSlider = (state = initialState, action) => {
  switch (action.type) {
    case "LEFT":
        return (state = state > 0 ? state - 1 : 2);
    case "RIGHT":
        return (state = state < 2 ? state + 1 : 0);
    default:
      return state;
  }
};

export default changeTheSlider;