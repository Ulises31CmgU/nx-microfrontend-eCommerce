import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore } from 'redux-persist';

import rootSaga from './root.sagas';
import { persistedReducer } from './root.reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middlewares],
  devTools: !process.env['production'],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
