import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const programs_review = await req.context.models.programs_review.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(programs_review)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const programs_review = await req.context.models.programs_review.findOne({
            where : { pore_prog_id : req.params.id },
        })
        return res.send(programs_review)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async(req, res) => {
    try {
        const programs_review = await req.context.models.programs_review.create({
            pore_prog_id : req.body.pore_prog_id,
            pore_entity_id : req.body.pore_entity_id,
            bore_review : req.body.bore_review,
            bore_rating : req.body.bore_rating
        })
        return res.send(programs_review)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async(req, res) => {
    try {
        const programs_review = await req.context.models.programs_review.update({
            pore_prog_id : req.body.pore_prog_id,
            pore_entity_id : req.body.pore_entity_id,
            bore_review : req.body.bore_review,
            bore_rating : req.body.bore_rating
        },{ returning : true , where : { pore_prog_id : req.params.id }}
        );
        return res.send(programs_review)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async(req,res) => {
    try {
        const programs_review = await req.context.models.programs_review.destroy({
            where : { pore_prog_id : req.params.id}
        })
        return res.send(`delete  ${programs_review} rows`)
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