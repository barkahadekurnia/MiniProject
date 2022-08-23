import axios from 'axios'
import config from '../config/config'

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/programreview/`)
        return result.data
    } catch (error) {
        return  await error.message
    }
}

const findOne = async(id) => {
    try {
        const result = await axios.get(`${config.domain}/programreview/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload) => {
    try {
        const result = await axios.post(`${config.domain}/programreview/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const update = async(data) => {
    try {
        const result = await axios.put(`${config.domain}/programreview/${data.pore_prog_id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const deleted = async(id) => {
    try {
        const result = await axios.delete(`${config.domain}/programreview/${id}`)
    } catch (error) {
        return await error.message
    }
}

export default {
    list,
    findOne,
    create,
    update,
    deleted
}