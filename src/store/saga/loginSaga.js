/* eslint-disable no-unused-vars */
import {
  takeEvery,
  call, // 调用异步操作
  fork,
  put, // dispatch
  take, // 监听
} from 'redux-saga/effects'
import { REQUEST, LOGIN_SAGA, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/loginType'
import LoginService from '../../service/login'

// watcher saga
export function* loginSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle);
}
// worker saga
function* loginHandle(action) {
  yield put({ type: REQUEST });
  try {
    const loginRes = yield call(LoginService.login, action.payload);
    const infoRes = yield call(LoginService.getMoreUserInfo, loginRes)
    yield put({ type: LOGIN_SUCCESS, payload: { ...loginRes, ...infoRes } })
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error })
  }
}

export function* logoutSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle);
  // 两种写法等价
  // while (true) {
  //   const action = yield take(LOGIN_SAGA);
  //   console.log(action);
  //   // yield call(loginHandle, action)
  //   yield fork(loginHandle, action)
  // }
}

// const myTakeEvery = (pattern, saga, ...args) => fork(function* () {
//   while (true) {
//     const action = yield take(pattern);
//     console.log(action);
//     yield fork(saga, ...args.concat(action))
//   }
// })