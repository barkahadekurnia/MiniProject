import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const course = await req.context.models.courses.findAll({
            include : [{
                all:true
            }]
        })
        return res.send(course)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async (req,res) => {
    try {
        const course = await req.context.models.courses.findOne({
            where: {corse_prog_id : req.params.id},
        })
        return res.send(course)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req, res) => {
    try {
        const course = await req.context.models.courses.create({
            corse_prog_id : req.body.corse_prog_id,
            corse_best_seller : req.body.corse_best_seller,
            corse_price : req.body.corse_price,
            corse_language : req.body.corse_language,
            corse_item_learning : req.body.corse_item_learning,
            corse_item_include : req.body.corse_item_include,
            corse_requirement : req.body.corse_requirement,
            corse_description : req.body.corse_description,
            corse_target_level : req.body.corse_target_level,
            corse_status : req.body.corse_status
        })
        return res.send(corse)
    } catch (error) {
        return res.status(404).send(error)
    }   
}

export default {
    findAll,
    findOne,
    create
}