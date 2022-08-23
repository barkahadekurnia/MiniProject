import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.ProgramReviewCtrl.findAll)
router.get('/:id',indexController.ProgramReviewCtrl.findOne)
router.post('/',indexController.ProgramReviewCtrl.create)
router.put('/:id',indexController.ProgramReviewCtrl.update)
router.delete('/:id',indexController.ProgramReviewCtrl.deleted)

export default router