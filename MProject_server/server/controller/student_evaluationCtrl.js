import { sequelize } from "../models/init-models";

const findAll = async (req,res) => {
    try {
        const studenteval = await req.context.models.student_evaluation.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(studenteval)
    } catch (error) {
        return res.status(404).send(error)    
    }
}

const findOne = async (req,res) => {
    try {
        const studenteval = await req.context.models.student_evaluation.findOne({
            where : { stev_id : req.params.id},
        })
        return res.send(studenteval)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne
}