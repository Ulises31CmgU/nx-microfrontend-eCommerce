import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './slices/user.slice';
import productReducer from './slices/products.slice';
import cartReducer from './slices/cart.slice';

const appReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'cart'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
