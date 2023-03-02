import { all, call, put, takeLatest } from 'redux-saga/effects';

import { UserCredentials } from '../../types/user.types';

import { loginRequestConnection } from '../../api/connection';

import {
  userLoginFail,
  userLoginRequest,
  userLoginSuccess,
} from '../slices/user.slice';

function* login(action: { payload: UserCredentials }): any {
  const userData = yield loginRequestConnection(action.payload);
  if (userData.error) {
    yield put(userLoginFail());
  } else {
    yield put(userLoginSuccess(userData.data));
  }
}

function* onLoginRequest() {
  yield takeLatest(userLoginRequest.match, login);
}

export default function* userSagas() {
  yield all([call(onLoginRequest)]);
}
