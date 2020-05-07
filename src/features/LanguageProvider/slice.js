import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LOCALE } from "./constants";

export const slice = createSlice({
  name: "languageProvider",
  initialState: {
    locale: DEFAULT_LOCALE,
    messages: {},
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    loadMessages: (state, action) => {
      state.messages[action.payload] = {
        ...state.messages[action.payload],
        loading: true,
      };
    },
    loadMessagesSuccess: (state, action) => {
      const { locale, messages } = action.payload;
      state.messages[locale].loading = false;
      state.messages[locale].messages = messages;
      state.messages[locale].error = null;
    },
    loadMessagesError: (state, action) => {
      const { locale, error } = action.payload;
      state.messages[locale].loading = false;
      state.messages[locale].error = error;
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
