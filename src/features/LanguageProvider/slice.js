import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./constants";

export const slice = createSlice({
  name: "languageProvider",
  initialState: {
    locale: DEFAULT_LOCALE,
    data: Object.values(SUPPORTED_LOCALES).reduce((data, locale) => {
      data[locale] = {
        loading: false,
        messages: null,
        error: null,
      };
      return data;
    }, {}),
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    loadMessages: (state, action) => {
      const locale = action.payload;
      state.data[locale].loading = true;
    },
    loadMessagesSuccess: (state, action) => {
      const { locale, messages } = action.payload;
      state.data[locale].loading = false;
      state.data[locale].messages = messages;
      state.data[locale].error = null;
    },
    loadMessagesError: (state, action) => {
      const { locale, error } = action.payload;
      state.data[locale].loading = false;
      state.data[locale].error = error;
    },
  },
});

export const {
  setLocale,
  loadMessages,
  loadMessagesSuccess,
  loadMessagesError,
} = slice.actions;

export default slice;
