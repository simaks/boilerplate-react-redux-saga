import { all } from "redux-saga/effects";
import counterSagas from "components/Counter/sagas";

export default function* rootSaga() {
  yield all([counterSagas()]);
}
