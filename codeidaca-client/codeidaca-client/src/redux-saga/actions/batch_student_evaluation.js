import *as ActionType from '../constants/batch_student_evaluation'

export const getBatchStudentEvaluationRequest = () => ({
    type : ActionType.GET_BATCHSTUDENTEVALUATION_REQUEST
})

export const getBatchStudentEvaluationSuccess = (payload) => ({
    type : ActionType.GET_BATCHSTUDENTEVALUATION_SUCCESS,
    payload
})

export const getBatchStudentEvaluationFailed = (payload) => ({
    type : ActionType.GET_BATCHSTUDENTEVALUATION_FAILED,
    payload
})

export const delBatchStudentEvaluationRequest = () => ({
    type : ActionType.DEL_BATCHSTUDENTEVALUATION_REQUEST
})

export const delBatchStudentEvaluationSuccess = (payload) =>({
    type : ActionType.DEL_BATCHSTUDENTEVALUATION_SUCCESS,
    payload
})

export const delBatchStudentEvaluationFailed = (payload) => ({
    type : ActionType.DEL_BATCHSTUDENTEVALUATION_FAILED,
    payload
})

export const addBatchStudentEvaluationRequest = () => ({
    type : ActionType.ADD_BATCHSTUDENTEVALUATION_REQUEST
})

export const addBatchStudentEvaluationSuccess = (payload) => ({
    type : ActionType.ADD_BATCHSTUDENTEVALUATION_SUCCESS,
    payload
})

export const addBatchStudentEvaluationFailed = (payload) => ({
    type : ActionType.ADD_BATCHSTUDENTEVALUATION_FAILED,
    payload
})