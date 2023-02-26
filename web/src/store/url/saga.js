import { takeLatest, put, call } from "redux-saga/effects";
import { GET_URLS, CREATE_URL } from "./actionTypes";
import {
  createUrlSuccess,
  createUrlFail,
  getUrlsSuccess,
  getUrlsFail
} from "./actions";

import { getUrls, createUrl } from "../../helpers/url_helper";

function* onGetUrls() {
  try {
    const response = yield call(getUrls);
    yield put(getUrlsSuccess(response));
  } catch (error) {
    yield put(getUrlsFail(error.response));
  }
}

function* onCreateUrl(input) {
  try {
    const response = yield call(createUrl, input);
    yield put(createUrlSuccess(response));
    yield call(onGetUrls); // Get url list
  } catch (error) {
    yield put(createUrlFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(GET_URLS, onGetUrls);
  yield takeLatest(CREATE_URL, onCreateUrl);
}

export default CartSaga;