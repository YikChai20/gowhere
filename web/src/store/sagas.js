import { all, fork } from "redux-saga/effects";
import UserSaga from "./url/saga";

// combine all saga
export default function* rootSaga() {
  yield all([fork(UserSaga)]);
}