import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    pending: false,
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incrementAsync: (state) => {
      state.pending = true;
    },
    incrementAsyncDone: (state, action) => {
      state.pending = false;
      state.value += action.payload;
      state.error = null;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  incrementAsyncDone,
} = slice.actions;

export const selectCount = (state) => state.counter.value;

export default slice.reducer;
