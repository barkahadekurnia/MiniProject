import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
    try {
        const courseReview = await req.context.models.course_review.findAll({
            include : [{
                all : true
            }]
        })
        return res.send (courseReview)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req,res) => {
    try {
        const courseReview = await req.context.models.course_review.findOne({
            where : { core_prog_id : req.params.id },
        })
        return res.send(courseReview)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne
}