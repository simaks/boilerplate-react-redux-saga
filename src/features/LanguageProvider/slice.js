import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LOCALE } from "./constants";

export const slice = createSlice({
  name: "locale",
  initialState: {
    locale: DEFAULT_LOCALE,
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = slice.actions;

export default slice;
