import { all, call } from 'redux-saga/effects';

import userSagas from './sagas/user.sagas';
import productSagas from './sagas/product.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(productSagas)]);
}
