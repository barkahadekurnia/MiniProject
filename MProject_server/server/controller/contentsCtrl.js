import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const content = await req.context.models.contents.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(content)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req,res) => {
    try {
        const content = await req.context.models.contents.findOne({
            where : { cont_id : req.params.id},
        })
        return res.send(content)
    } catch (error) {
        return res.status(404).send(404)
    }
}

const create = async (req, res) => {
    try {
        const content = await req.context.models.contents.create({
           cont_id : req.body.cont_id,
           cont_prog_id : req.body.cont_prog_id,
           cont_title : req.body.cont_title,
           cont_description : req.body.cont_description,
           cont_total_section : req.body.cont_total_section,
           cont_total_lecture : req.body.cont_total_lecture,
           cont_total_minute : req.body.cont_total_minute 
        })
        return res.send(content)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create
}