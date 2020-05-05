import { put, takeLatest, all } from "redux-saga/effects";
import {
  incrementAsync,
  incrementAsyncError,
  incrementAsyncSuccess,
} from "./slice";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementAsyncSaga({ payload }) {
  yield delay(1000);
  if (!payload) {
    yield put(incrementAsyncError("Asynchronously adding zero."));
  } else {
    yield put(incrementAsyncSuccess(payload));
  }
}

function* watchIncrementAsync() {
  yield takeLatest(incrementAsync.type, incrementAsyncSaga);
}

export default function* counterSagas() {
  yield all([watchIncrementAsync()]);
}
