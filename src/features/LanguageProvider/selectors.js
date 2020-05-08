import { createSelector } from "@reduxjs/toolkit";
import slice from "./slice";
import { DEFAULT_LOCALE } from "./constants";

export const selectLocaleSlice = (state) => state[slice.name];

export const selectLocale = createSelector(
  [selectLocaleSlice],
  (localeSlice) => localeSlice.locale
);

export const selectDefaultData = createSelector(
  [selectLocaleSlice],
  (localeSlice) => localeSlice.data[DEFAULT_LOCALE]
);

export const selectDefaultMessages = createSelector(
  [selectDefaultData],
  (data) => data?.messages
);

export const selectActiveData = createSelector(
  [selectLocaleSlice, selectLocale],
  (localeSlice, locale) => localeSlice.data[locale]
);

export const selectLocaleMessages = createSelector(
  [selectActiveData],
  (data) => data?.messages
);

export const selectLocaleLoading = createSelector(
  [selectActiveData],
  (data) => data?.loading
);

export const selectLocaleError = createSelector(
  [selectActiveData],
  (data) => data?.error
);
