import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "app/reducer";
import sagas from "app/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  reducer: rootReducer,
});

sagaMiddleware.run(sagas);

export default store;
