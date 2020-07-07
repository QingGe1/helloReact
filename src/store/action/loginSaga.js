import { takeEvery, take, call, put } from 'redux-saga/effects'
import { REQUEST, LOGIN_SAGA, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginType'
import LoginService from '../../service/login'


export default function* loginSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle)
}

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