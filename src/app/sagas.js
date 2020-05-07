import { all } from "redux-saga/effects";
import counterSagas from "features/CounterPage/sagas";

export default function* rootSaga() {
  yield all([counterSagas()]);
}
