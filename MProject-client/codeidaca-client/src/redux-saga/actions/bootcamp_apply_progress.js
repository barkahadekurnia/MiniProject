import *as ActionType from '../constants/bootcamp_apply_progress'

export const getBootCampProgressRequest = () => ({
    type : ActionType.GET_BOOTCAMPAPPLYPROGRESS_REQUEST
})

export const getBootCampProgressSuccess = (payload) => ({
    type : ActionType.GET_BOOTCAMPAPPLYPROGRESS_SUCCESS,
    payload
})

export const getBootCampProgressFailed = (payload) => ({
    type : ActionType.GET_BOOTCAMPAPPY_FAILED_FAILED,
    payload
})

export const delBootCampProgressRequest = () => ({
    type : ActionType.DEL_BOOTCAMPAPPLYPROGRESS_REQUEST
})

export const delBootCampProgressSuccess = (payload) =>({
    type : ActionType.DEL_BOOTCAMPAPPLYPROGRESS_SUCCESS,
    payload
})

export const delBootCampProgressFailed = (payload) => ({
    type : ActionType.DEL_BOOTCAMPAPPLYPROGRESS_FAILED,
    payload
})

export const addBootCampProgressRequest = () => ({
    type : ActionType.ADD_BOOTCAMPAPPLYPROGRESS_REQUEST
})

export const addBootCampProgressSuccess = (payload) => ({
    type : ActionType.ADD_BOOTCAMPAPPLYPROGRESS_SUCCESS,
    payload
})

export const addBootCampProgressFailed = (payload) => ({
    type : ActionType.ADD_BOOTCAMPAPPLYPROGRESS_FAILED,
    payload
})