import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const bootcamp_apply_progress = await req.context.models.bootcamp_apply_progress.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(bootcamp_apply_progress)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async (req, res) => {
    try {
        const bootcamp_apply_progress = await req.context.models.bootcamp_apply_progress.findOne({
            where : { bapr_id : req.params.id},
        })
        return res.send(bootcamp_apply_progress)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req, res) => {
    try {
        const bootcamp_apply_progress = await req.context.models.bootcamp_apply_progress.create({
            bapr_id : req.body.bapr_id,
            bapr_prog_id : req.body.bapr_prog_id,
            bapr_entity_id : req.body.bapr_entity_id,
            bapr_roac_id : req.body.bapr_roac_id,
            bapr_status : req.body.bapr_status,
            bapr_comment : req.body.bapr_comment
        })
        return res.send(bootcamp_apply_progress)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req, res) => {
    try {
        const bootcamp_apply_progress = await req.context.models.bootcamp_apply_progress.update({
            bapr_id : req.body.bapr_id,
            bapr_prog_id : req.body.bapr_prog_id,
            bapr_entity_id : req.body.bapr_entity_id,
            bapr_roac_id : req.body.bapr_roac_id,
            bapr_status : req.body.bapr_status,
            bapr_comment : req.body.bapr_comment,
        },{ returning : true, where : { bapr_id : req.params.id }}
        );
        return res.send(bootcamp_apply_progress)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req, res) => {
    try {
        const bootcamp_apply_progress = await req.context.models.bootcamp_apply_progress.destroy({
            where : { bapr_id : req.params.id }
        })
        return res.send(`delete ${bootcamp_apply_progress} rows`)
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