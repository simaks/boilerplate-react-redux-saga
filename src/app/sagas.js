import { all } from "redux-saga/effects";
import counterSagas from "features/CounterPage/sagas";
import languageProviderSagas from "features/LanguageProvider/sagas";
import npmRegistryProviderSagas from "features/NpmRegistryPage/sagas";

export default function* rootSaga() {
  yield all([
    languageProviderSagas(),
    counterSagas(),
    npmRegistryProviderSagas(),
  ]);
}
