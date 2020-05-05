import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "components/Counter/slice";

const reducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export default reducer;
