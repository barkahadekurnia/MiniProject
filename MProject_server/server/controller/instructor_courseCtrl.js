import { sequelize } from "../models/init-models";

const findAll = async (req,res ) => {
    try {
        const instructor = await req.context.models.instructor_course.findAll({
            include : [{
                all :true
            }]
        })
        return res.send(instructor)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async (req,res) => {
    try {
        const instructor = await req.context.models.instructor_course.findOne({
            where : {inco_id : req.params.id},
        })
        return res.send(instructor)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default{
    findAll,
    findOne
}