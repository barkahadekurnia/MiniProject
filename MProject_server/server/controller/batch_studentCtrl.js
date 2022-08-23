import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const batch_student = await req.context.models.batch_student.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(batch_student)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const batch_student = await req.context.models.batch_student.findOne({
            where : { bast_id : req.params.id },
        })
        return res.send(batch_student)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async(req, res) => {
    try {
        const batch_student = await req.context.models.batch_student.create({
            bast_id : req.body.bast_id,
            bast_batch_id : req.body.bast_batch_id,
            bast_entity_id : req.body.bast_entity_id,
            bast_status : req.body.bast_status,
            bast_review : req.body.bast_review,
            bast_total_score : req.body.bast_total_score
        })
        return res.send(batch_student)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async(req, res) => {
    try {
        const batch_student = await req.context.models.batch_student.update({
            bast_id : req.body.bast_id,
            bast_batch_id : req.body.bast_batch_id,
            bast_entity_id : req.body.bast_entity_id,
            bast_status : req.body.bast_status,
            bast_review : req.body.bast_review,
            bast_total_score : req.body.bast_total_score
        },{ returning : true , where : { bast_id : req.params.id }}
        );
        return res.send(batch_student)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async(req,res) => {
    try {
        const batch_student = await req.context.models.batch_student.destroy({
            where : { bast_id : req.params.id}
        })
        return res.send(`delete  ${batch_student} rows`)
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