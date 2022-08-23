import *as ActionType from '../constants/bootcamp-apply'

export const getBootCampRequest = () => ({
    type : ActionType.GET_BOOTCAMPAPPLY_REQUEST
})

export const getBootCampSuccess = (payload) => ({
    type : ActionType.GET_BOOTCAMPAPPLY_SUCCESS,
    payload
})

export const getBootCampFailed = (payload) => ({
    type : ActionType.GET_BOOTCAMPAPPLY_FAILED,
    payload
})

export const delBootCampRequest = () => ({
    type : ActionType.DEL_BOOTCAMPAPPLY_REQUEST
})

export const delBootCampSuccess = (payload) =>({
    type : ActionType.DEL_BOOTCAMPAPPLY_SUCCESS,
    payload
})

export const delBootCampFailed = (payload) => ({
    type : ActionType.DEL_BOOTCAMPAPPLY_FAILED,
    payload
})

export const addBootCampRequest = () => ({
    type : ActionType.ADD_BOOTCAMPAPPLY_REQUEST
})

export const addBootcampSuccess = (payload) => ({
    type : ActionType.ADD_BOOTCAMPAPPLY_SUCCESS,
    payload
})

export const addBootcampFailed = (payload) => ({
    type : ActionType.ADD_BOOTCAMPAPPLY_FAILED,
    payload
})