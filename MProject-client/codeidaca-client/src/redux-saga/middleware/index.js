import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';

//

import * as ActionTypeBootcampApply from '../constants/bootcamp-apply'

import {handleSignup,handleSignin,handleSignout} from './UserSaga'
//
import {handleAddBootCampApply, handleDelBootCampApply, handleGetBootCampApply} from './BootcampApplySaga'

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeBootcampApply.GET_BOOTCAMPAPPLY_REQUEST,handleGetBootCampApply),
    takeEvery(ActionTypeBootcampApply.DEL_BOOTCAMPAPPLY_REQUEST,handleDelBootCampApply),
    takeEvery(ActionTypeBootcampApply.ADD_BOOTCAMPAPPLY_REQUEST,handleAddBootCampApply)

  ])
}

export default watchAll;


