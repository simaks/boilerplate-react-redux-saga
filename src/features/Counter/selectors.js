import { createSelector } from "@reduxjs/toolkit";
import slice from "./slice";

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
