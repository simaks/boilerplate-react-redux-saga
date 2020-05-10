import { put, takeLatest, all } from "redux-saga/effects";
import {
  initLocale,
  initLocaleSuccess,
  initLocaleError,
  setLocale,
  loadMessages,
  loadMessagesSuccess,
  loadMessagesError,
} from "./slice";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  LOCAL_STORAGE_KEY,
} from "./constants";

function* initLocaleSaga() {
  try {
    let locale = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (locale && !Object.values(SUPPORTED_LOCALES).includes(locale)) {
      localStorage.removeItem(LOCAL_STORAGE_KEY); // Remove invalid value from storage
    }
    if (!locale) {
      locale = DEFAULT_LOCALE;
    }
    yield put(initLocaleSuccess(locale));
  } catch (error) {
    yield put(initLocaleError(error.message));
  }
}

// eslint-disable-next-line require-yield
function* setLocaleSaga({ payload: locale }) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, locale);
  } catch (error) {
    console.error(error);
  }
}

function* loadMessagesSaga({ payload: locale }) {
  try {
    const messages = (yield import(`translations/${locale}.json`)).default;
    yield put(loadMessagesSuccess({ locale, messages }));
  } catch (error) {
    yield put(loadMessagesError({ locale, error: error.message }));
  }
}

export default function* messagesSagas() {
  yield all([
    yield takeLatest(initLocale.type, initLocaleSaga),
    yield takeLatest(setLocale.type, setLocaleSaga),
    yield takeLatest(loadMessages.type, loadMessagesSaga),
  ]);
}
