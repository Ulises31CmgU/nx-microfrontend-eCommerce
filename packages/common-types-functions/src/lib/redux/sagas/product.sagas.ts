import { all, call, put, takeLatest } from 'redux-saga/effects';
import { productListRequestConnection } from '../../api/connection';

import {
  productListFail,
  productListRequest,
  productListSuccess,
} from '../slices/products.slice';

function* productList(): any {
  const data = yield productListRequestConnection();
  if (data.error) {
    yield put(productListFail());
  } else {
    yield put(productListSuccess(data.data));
  }
}

function* onProductListRequest() {
  yield takeLatest(productListRequest.match, productList);
}

export default function* productSagas() {
  yield all([call(onProductListRequest)]);
}
