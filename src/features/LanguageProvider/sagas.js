import { put, takeLatest, all } from "redux-saga/effects";
import { loadMessages, loadMessagesSuccess, loadMessagesError } from "./slice";

function* loadMessagesSaga({ payload: locale }) {
  try {
    const messages = (yield import(`translations/${locale}.json`)).default;
    yield put(loadMessagesSuccess({ locale, messages }));
  } catch (error) {
    yield put(loadMessagesError({ locale, error: error.message }));
  }
}

function* watchLoadMessages() {
  yield takeLatest(loadMessages.type, loadMessagesSaga);
}

export default function* messagesSagas() {
  yield all([watchLoadMessages()]);
}
