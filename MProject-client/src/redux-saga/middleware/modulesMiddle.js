import { call, put } from "redux-saga/effects";
import apiModules from "../../api/api-module";
import {
  GetModulesSuccess,
  GetModulesFailed,
  DelModulesSuccess,
  DelModulesFailed,
  AddModulesSuccess,
  AddModulesFailed,
  EditModulesSuccess,
  EditModulesFailed,
} from "../actions/modules";

function* handleGetModules() {
  try {
    const result = yield call(apiModules.list);
    yield put(GetModulesSuccess(result));
  } catch (error) {
    yield put(GetModulesFailed(error));
  }
}

function* handleDelModules(action) {
  const { payload } = action;
  try {
    const result = yield call(apiModules.deleted, payload);
    yield put(DelModulesSuccess(result));
  } catch (error) {
    yield put(DelModulesFailed(error));
  }
}

function* handleAddModules(action) {
  const { payload } = action;
  try {
    const result = yield call(apiModules.create, payload);
    yield put(AddModulesSuccess(result.data));
  } catch (error) {
    yield put(AddModulesFailed(error));
  }
}

function* handleEditModules(action) {
  const { payload } = action;
  try {
    const result = yield call(apiModules.update, payload);
    yield put(EditModulesSuccess(result.data[1]));
  } catch (error) {
    yield put(EditModulesFailed(error));
  }
}

export {
  handleGetModules,
  handleDelModules,
  handleAddModules,
  handleEditModules,
};
