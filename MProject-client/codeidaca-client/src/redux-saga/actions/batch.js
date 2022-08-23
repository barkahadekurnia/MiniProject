import *as ActionType from '../constants/batch'

export const getBatchRequest = () => ({
    type : ActionType.GET_BATCH_REQUEST
})

export const getBatchSuccess = (payload) => ({
    type : ActionType.GET_BATCH_SUCCESS,
    payload
})

export const getBatchFailed = (payload) => ({
    type : ActionType.GET_BATCH_FAILED,
    payload
})

export const delBatchRequest = () => ({
    type : ActionType.DEL_BATCH_REQUEST
})

export const delBatchSuccess = (payload) =>({
    type : ActionType.DEL_BATCH_SUCCESS,
    payload
})

export const delBatchFailed = (payload) => ({
    type : ActionType.DEL_BATCH_FAILED,
    payload
})

export const addBatchRequest = () => ({
    type : ActionType.ADD_BATCH_REQUEST
})

export const addBatchSuccess = (payload) => ({
    type : ActionType.ADD_BATCH_SUCCESS,
    payload
})

export const addBatchFailed = (payload) => ({
    type : ActionType.ADD_BATCH_FAILED,
    payload
})