import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';
import ApiBootCampApply from '../../api/api-bootcampapply'
import { getBootCampSuccess, getBootCampFailed, delBootCampSuccess, delBootCampFailed, addBootcampSuccess, addBootcampFailed } from '../actions/bootcamp-apply'

function* handleGetBootCampApply() {
    try {
        const result = yield call (ApiBootCampApply.listed)
        yield put(getBootCampSuccess(result))
    } catch (error) {
        yield put(getBootCampFailed(error))
    }
}

function* handleDelBootCampApply(action) {
    const {payload} = action
    try {
        const result = yield call (ApiBootCampApply.deleted,payload)
        yield put(delBootCampSuccess(payload))
    } catch (error) {
        yield put(delBootCampFailed(error))
    }
}

function* handleAddBootCampApply(action) {
    const {payload} = action
    try {
        const result = yield call(ApiBootCampApply.create,payload)
        yield put(addBootcampSuccess(result.data))
    } catch (error) {
        yield put(addBootcampFailed(error))
    }
}

export {
    handleGetBootCampApply,
    handleDelBootCampApply,
    handleAddBootCampApply
}