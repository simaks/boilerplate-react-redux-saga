import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import sagas from "./sagas";

function getStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
    reducer: rootReducer,
  });
  sagaMiddleware.run(sagas);
  return store;
}

export { getStore };
