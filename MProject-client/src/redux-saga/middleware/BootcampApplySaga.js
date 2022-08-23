import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import apiBootcampApply from "../../api/api-bootcampApply";
import {
  getBootcampSuccess,
  getBootcampFailed,
  delBootcampSuccess,
  delBootcampFailed,
  addBootcampSuccess,
  addBootcampFailed,
} from "../actions/bootcampApply";

function* handleGetBootcampApply() {
  try {
    const result = yield call(apiBootcampApply.listed);
    yield put(getBootcampSuccess(result));
  } catch (error) {
    yield put(getBootcampFailed(error));
  }
}

function* handleDelBootcampApply(action) {
  const { payload } = action;
  try {
    const result = yield call(apiBootcampApply.deleted, payload);
    yield put(delBootcampSuccess(payload));
  } catch (error) {
    yield put(delBootcampFailed(error));
  }
}

function* handleAddBootcampApply(action) {
  const { payload } = action;
  try {
    const result = yield call(apiBootcampApply.create, payload);
    yield put(addBootcampSuccess(result.data));
  } catch (error) {
    yield put(addBootcampFailed(error));
  }
}

export {
  handleGetBootcampApply,
  handleDelBootcampApply,
  handleAddBootcampApply,
};
