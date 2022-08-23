import { sequelize } from "../models/init-models";

const findAll = async(req, res) => {
    try {
        const contentMaterial = await req.context.models.content_section_material.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(contentMaterial)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const contentMaterial = await req.context.models.content_section_material.findOne({
            where : {cosm_id : req.params.id},
        })
        return res.send(contentMaterial)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne
}