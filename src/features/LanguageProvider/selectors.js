import { createSelector } from "@reduxjs/toolkit";
import slice from "./slice";

export const selectLocaleSlice = (state) => state[slice.name];

export const selectLocale = createSelector(
  [selectLocaleSlice],
  (localeSlice) => localeSlice.locale
);
