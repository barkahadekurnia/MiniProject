import { getBootCampSuccess } from '../actions/bootcamp-apply'
import *as ActionType from '../constants/bootcamp-apply'

const INIT_STATE ={
    bootcamp_apply : []
}

const BootCampReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_BOOTCAMPAPPLY_REQUEST :
            return { ...state }
        case ActionType.GET_BOOTCAMPAPPLY_SUCCESS :
            return getBootCampSucceed(state, action)
        case ActionType.DEL_BOOTCAMPAPPLY_REQUEST :
            return { ...state }
        case ActionType.DEL_BOOTCAMPAPPLY_SUCCESS :
            return delBootCampSucceed(state, action)
        case ActionType.ADD_BOOTCAMPAPPLY_REQUEST :
            return { ...state }
        case ActionType.ADD_BOOTCAMPAPPLY_SUCCESS :
            return addBootCampSucceed(state, action)
        default:
            return getBootCampSucceed(state, action)
    }
}

const getBootCampSucceed = (state, action) => {
    return {
        ...state,
        bootcamp_apply : action.payload
    }
}

const delBootCampSucceed = (state, action) => {
    const {payload} = action
    const filterBootCampApply = state.bootcamp_apply.filter(el => el.boap_prog_id != payload )
    return {
        ...state,
        bootcamp_apply : [...filterBootCampApply]
    }
}

const addBootCampSucceed = (state, action) => {
    const {payload} = action
    return {
        ...state,
        bootcamp_apply : [...state.bootcamp_apply,payload]
    }
}

export default BootCampReduce