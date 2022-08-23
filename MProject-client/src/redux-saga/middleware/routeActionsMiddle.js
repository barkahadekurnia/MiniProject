import { call, put } from "redux-saga/effects";
import apiRouteActions from "../../api/api-routeActions";
import {
  GetRouteActionsSuccess,
  GetRouteActionsFailed,
  DelRouteActionsSuccess,
  DelRouteActionsFailed,
  AddRouteActionsSuccess,
  AddRouteActionsFailed,
  EditRouteActionsSuccess,
  EditRouteActionsFailed,
} from "../actions/routeActions";

function* handleGetRouteActions() {
  try {
    const result = yield call(apiRouteActions.list);
    yield put(GetRouteActionsSuccess(result));
  } catch (error) {
    yield put(GetRouteActionsFailed(error));
  }
}

function* handleDelRouteActions(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRouteActions.deleted, payload);
    yield put(DelRouteActionsSuccess(payload));
  } catch (error) {
    yield put(DelRouteActionsFailed(error));
  }
}

function* handleAddRouteActions(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRouteActions.create, payload);
    yield put(AddRouteActionsSuccess(result.data));
  } catch (error) {
    yield put(AddRouteActionsFailed(error));
  }
}
function* handleEditRouteActions(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRouteActions.update, payload);
    yield put(EditRouteActionsSuccess(result.data[1]));
  } catch (error) {
    yield put(EditRouteActionsFailed(error));
  }
}

export {
  handleGetRouteActions,
  handleDelRouteActions,
  handleAddRouteActions,
  handleEditRouteActions,
};
