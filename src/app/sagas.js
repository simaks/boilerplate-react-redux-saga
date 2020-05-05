import { all } from "redux-saga/effects";
import counterSagas from "features/Counter/sagas";

export default function* rootSaga() {
  yield all([counterSagas()]);
}
