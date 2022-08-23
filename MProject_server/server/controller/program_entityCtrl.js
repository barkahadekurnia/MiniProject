import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const program = await req.context.models.program_entity.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(program);
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const program = await req.context.models.program_entity.findOne({
            where: { prog_id : req.params.id},
        })
        return res.send(program)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create  = async (req, res) => {
    try {
        const program = await req.context.models.program_entity.create({
            prog_id : req.body.prog_id,
            prog_title : req.body.prog_title,
            prog_headline : req.body.prog_headline,
            prog_type : req.body.prog_type,
            prog_learning_type : req.body.prog_learning_type,
            prog_rating : req.body.prog_rating,
            prog_total_student : req.body.prog_total_student,
            prog_image : req.body.prog_image,
            prog_city_id : req.body.prog_city_id,
            prog_cate_id : req.body.prog_cate_id
        })
        return res.send(program)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create
}