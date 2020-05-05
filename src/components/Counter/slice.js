import { createSlice, createSelector } from "@reduxjs/toolkit";

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
    incrementAsyncSuccess: (state, action) => {
      state.pending = false;
      state.value += action.payload;
      state.error = null;
    },
    incrementAsyncError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  incrementAsyncSuccess,
  incrementAsyncError,
} = slice.actions;

export const selectCounter = (state) => state[slice.name];

export const selectCount = createSelector(
  [selectCounter],
  (counter) => counter.value
);

export const selectPending = createSelector(
  [selectCounter],
  (counter) => counter.pending
);

export const selectError = createSelector(
  [selectCounter],
  (counter) => counter.error
);

export default slice;
