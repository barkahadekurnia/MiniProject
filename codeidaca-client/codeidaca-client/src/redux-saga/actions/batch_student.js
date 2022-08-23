import *as ActionType from '../constants/batch_student'

export const getBatchStudentRequest = () => ({
    type : ActionType.GET_BATCHSTUDENT_REQUEST
})

export const getBatchStudentSuccess = (payload) => ({
    type : ActionType.GET_BATCHSTUDENT_SUCCESS,
    payload
})

export const getBatchStudentFailed = (payload) => ({
    type : ActionType.GET_BATCHSTUDENT_FAILED,
    payload
})

export const delBatchStudentRequest = () => ({
    type : ActionType.DEL_BATCHSTUDENT_REQUEST
})

export const delBatchStudentSuccess = (payload) =>({
    type : ActionType.DEL_BATCHSTUDENT_SUCCESS,
    payload
})

export const delBatchStudentFailed = (payload) => ({
    type : ActionType.DEL_BATCHSTUDENT_FAILED,
    payload
})

export const addBatchStudentRequest = () => ({
    type : ActionType.ADD_BATCHSTUDENT_REQUEST
})

export const addBatchStudentSuccess = (payload) => ({
    type : ActionType.ADD_BATCHSTUDENT_SUCCESS,
    payload
})

export const addBatchStudentFailed = (payload) => ({
    type : ActionType.ADD_BATCHSTUDENT_FAILED,
    payload
})