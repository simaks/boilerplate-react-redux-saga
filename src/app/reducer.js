import counterSlice from "features/Counter/slice";

const reducer = {
  [counterSlice.name]: counterSlice.reducer,
};

export default reducer;
