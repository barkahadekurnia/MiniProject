import *as ActionType from '../constants/program_review'

export const getProgramReviewRequest = () => ({
    type : ActionType.GET_PROGRAMREVIEW_REQUEST
})

export const getProgramReviewSuccess = (payload) => ({
    type : ActionType.GET_PROGRAMREVIEW_SUCCESS,
    payload
})

export const getProgramReviewFailed = (payload) => ({
    type : ActionType.GET_PROGRAMREVIEW_FAILED,
    payload
})

export const delProgramReviewRequest = () => ({
    type : ActionType.DEL_PROGRAMREVIEW_REQUEST
})

export const delProgramReviewSuccess = (payload) =>({
    type : ActionType.DEL_PROGRAMREVIEW_SUCCESS,
    payload
})

export const delProgramReviewFailed = (payload) => ({
    type : ActionType.DEL_PROGRAMREVIEW_FAILED,
    payload
})

export const addProgramReviewRequest = () => ({
    type : ActionType.ADD_PROGRAMREVIEW_REQUEST
})

export const addProgramReviewSuccess = (payload) => ({
    type : ActionType.ADD_PROGRAMREVIEW_SUCCESS,
    payload
})

export const addProgramReviewFailed = (payload) => ({
    type : ActionType.ADD_PROGRAMREVIEW_FAILED,
    payload
})