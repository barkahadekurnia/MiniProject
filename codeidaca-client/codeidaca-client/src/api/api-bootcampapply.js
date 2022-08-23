import axios from 'axios';
import config from "../config/config";

const listed = async()=>{
    try {
        const result = await axios.get(`${config.domain}/bootcampapply/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload)=>{
	try {
		const result = await axios.post(`${config.domain}/bootcampapply/`,payload)
		return result
	} catch (error) {
		return await error.message
	}
}

const findOne = async (id) =>{
    try {
        const result = await axios.get(`${config.domain}/bootcampapply/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const update = async (data) =>{
    try {
        const result = await axios.put(`${config.domain}/bootcampapply/${data.boap_prog_id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/bootcampapply/${id}`)
    } catch (error) {
        return await error.message
    }
}



export default {
    listed,create,findOne,update,deleted}