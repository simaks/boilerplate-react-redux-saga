import { put, takeLatest, all } from "redux-saga/effects";
import { incrementAsync, incrementAsyncDone } from "./slice";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementAsyncSaga({ payload }) {
  yield delay(1000);
  yield put(incrementAsyncDone(payload));
}

function* watchIncrementAsync() {
  yield takeLatest(incrementAsync.type, incrementAsyncSaga);
}

export default function* counterSagas() {
  yield all([watchIncrementAsync()]);
}
