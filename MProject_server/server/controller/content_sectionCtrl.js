import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
    try {
        const contentsec = await req.context.models.content_section.findAll({
            include : [{
                all : true
            }]
        })
        return res.send(contentsec)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const contentsec = await req.context.models.content_section.findOne({
            where : { cose_id : req.params.id},
        })
        return res.send(contentsec)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async(req,res) => {
    try {
        const contentsec = await req.context.models.content_section.create({
            cose_id : req.body.cose_id,
            cose_title : req.body.cose_title,
            cose_preview : req.body.cose_preview,
            cose_note : req.body.cose_note,
            cose_minute : req.body.cose_minute,
            cose_cont_id : req.body.cose_cont_id
        })
        return res.send(contentsec)
    } catch (error) {
        return res.status(404).send(error)
    }
    
}

export default {
    findAll,
    findOne
}