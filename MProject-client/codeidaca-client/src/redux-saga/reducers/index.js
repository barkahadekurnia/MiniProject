import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import bootcampReduce from './BootCampApplyReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  bootcampapplyState : bootcampReduce
});

export default rootReducer;