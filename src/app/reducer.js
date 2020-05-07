import { combineReducers } from "@reduxjs/toolkit";
import localeSlice from "features/LanguageProvider/slice";
import counterSlice from "features/CounterPage/slice";

const reducer = combineReducers({
  [localeSlice.name]: localeSlice.reducer,
  [counterSlice.name]: counterSlice.reducer,
});

export default reducer;
