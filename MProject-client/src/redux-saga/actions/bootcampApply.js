import * as ActionType from "../constants/bootcampApply";

export const getBootcampApplyRequest = () => ({
  type: ActionType.GET_BOOTCAMPAPPLY_REQUEST,
});

export const getBootcampApplySuccess = (payload) => ({
  type: ActionType.GET_BOOTCAMPAPPLY_SUCCESS,
  payload,
});

export const getBootcampApplyFailed = (payload) => ({
  type: ActionType.GET_BOOTCAMPAPPLY_FAILED,
  payload,
});

export const delBootcampApplyRequest = () => ({
  type: ActionType.DEL_BOOTCAMPAPPLY_REQUEST,
});

export const delBootcampApplySuccess = (payload) => ({
  type: ActionType.DEL_BOOTCAMPAPPLY_SUCCESS,
  payload,
});

export const delBootcampApplyFailed = (payload) => ({
  type: ActionType.DEL_BOOTCAMPAPPLY_FAILED,
  payload,
});

export const addBootcampApplyRequest = () => ({
  type: ActionType.ADD_BOOTCAMPAPPLY_REQUEST,
});

export const addBootcampApplySuccess = (payload) => ({
  type: ActionType.ADD_BOOTCAMPAPPLY_SUCCESS,
  payload,
});

export const addBootcampApplyFailed = (payload) => ({
  type: ActionType.ADD_BOOTCAMPAPPLY_FAILED,
  payload,
});
