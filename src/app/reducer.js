import { combineReducers } from "@reduxjs/toolkit";
import localeSlice from "features/LanguageProvider/slice";
import counterSlice from "features/CounterPage/slice";
import npmSlice from "features/NpmRegistryPage/slice";

const reducer = combineReducers({
  [localeSlice.name]: localeSlice.reducer,
  [counterSlice.name]: counterSlice.reducer,
  [npmSlice.name]: npmSlice.reducer,
});

export default reducer;
