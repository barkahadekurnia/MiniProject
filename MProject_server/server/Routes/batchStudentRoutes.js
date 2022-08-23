import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.BatchStudentCtrl.findAll)
router.get('/:id',indexController.BatchStudentCtrl.findOne)
router.post('/',indexController.BatchStudentCtrl.create)
router.put('/:id',indexController.BatchStudentCtrl.update)
router.delete('/:id',indexController.BatchStudentCtrl.deleted)

export default router