import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const batch_student_evaluation = await req.context.models.batch_student_evaluation.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(batch_student_evaluation)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const batch_student_evaluation = await req.context.models.batch_student_evaluation.findOne({
            where : { base_id : req.params.id },
        })
        return res.send(batch_student_evaluation)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async(req, res) => {
    try {
        const batch_student_evaluation = await req.context.models.batch_student_evaluation.create({
            base_id : req.body.base_id,
            base_type : req.body.base_type,
            base_skill : req.body.base_skill,
            base_grade : req.body.base_grade,
            base_note : req.body.base_note,
            base_order : req.body.base_order,
            base_bast_id : req.body.base_order
        })
        return res.send(batch_student_evaluation)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async(req, res) => {
    try {
        const batch_student_evaluation = await req.context.models.batch_student_evaluation.update({
            base_id : req.body.base_id,
            base_type : req.body.base_type,
            base_skill : req.body.base_skill,
            base_grade : req.body.base_grade,
            base_note : req.body.base_note,
            base_order : req.body.base_order,
            base_bast_id : req.body.base_order
        },{ returning : true , where : { base_id : req.params.id }}
        );
        return res.send(batch_student_evaluation)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async(req,res) => {
    try {
        const batch_student_evaluation = await req.context.models.batch_student_evaluation.destroy({
            where : { base_id : req.params.id}
        })
        return res.send(`delete  ${batch_student_evaluation} rows`)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted
}