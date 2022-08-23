import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
    try {
        const student = await req.context.models.student_course.findAll({
            include :[{
                all : true
            }]
        })
        return res.send(student)
    } catch (error) {
        return res.status(404).send(error)       
    }
}

const findOne = async(req, res) => {
    try {
        const student = await req.context.models.student_course.findOne({
            where : { stud_prog_id : req.params.id},
        })
        return res.send(student)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default{
    findAll,
    findOne
}