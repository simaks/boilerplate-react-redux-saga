import { all } from "redux-saga/effects";
import counterSagas from "features/CounterPage/sagas";
import languageProviderSagas from "features/LanguageProvider/sagas";

export default function* rootSaga() {
  yield all([languageProviderSagas(), counterSagas()]);
}
