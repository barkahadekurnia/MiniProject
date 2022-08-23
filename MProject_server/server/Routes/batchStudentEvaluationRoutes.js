import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.BatchStudentEvaluationCtrl.findAll)
router.get('/:id',indexController.BatchStudentEvaluationCtrl.findOne)
router.post('/',indexController.BatchStudentEvaluationCtrl.create)
router.put('/:id',indexController.BatchStudentEvaluationCtrl.update)
router.delete('/:id',indexController.BatchStudentEvaluationCtrl.deleted)

export default router