import * as ActionType from "../constants/bootcampApply";

const INIT_STATE = {
  bootcampApply: [],
};

const bootcampReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BOOTCAMPAPPLY_REQUEST:
      return { ...state };
    case ActionType.GET_BOOTCAMPAPPLY_SUCCESS:
      return getBootcampApplySucceed(state, action);
    case ActionType.DEL_BOOTCAMPAPPLY_REQUEST:
      return { ...state };
    case ActionType.DEL_BOOTCAMPAPPLY_SUCCESS:
      return delBootcampApplySucceed(state, action);
    case ActionType.ADD_BOOTCAMPAPPLY_REQUEST:
      return { ...state };
    case ActionType.ADD_BOOTCAMPAPPLY_SUCCESS:
      return addBootcampApplySucceed(state, action);
    default:
      return getBootcampApplySucceed(state, action);
  }
};

const getBootcampApplySucceed = (state, action) => {
  return {
    ...state,
    bootcampApply: action.payload,
  };
};

const delBootcampApplySucceed = (state, action) => {
  const { payload } = action;
  const filterBootCampApply = state.bootcampApply.filter(
    (el) => el.boap_prog_id != payload
  );
  return {
    ...state,
    bootcampApply: [...filterBootCampApply],
  };
};

const addBootcampApplySucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    bootcampApply: [...state.bootcampApply, payload],
  };
};

export default bootcampReduce;
