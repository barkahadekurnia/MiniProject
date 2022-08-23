import axios from "axios";
import config from "../config/config";

const listed = async () => {
  try {
    const result = await axios.get(`${config.domain}/bootcampApply/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/bootcampApply/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/bootcampApply/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const update = async (data) => {
  try {
    const result = await axios.put(
      `${config.domain}/bootcampApply/${data.bootcampApply_id}`,
      data
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/bootcampApply/${id}`);
  } catch (error) {
    return await error.message;
  }
};

export default {
  listed,
  create,
  findOne,
  update,
  deleted,
};
