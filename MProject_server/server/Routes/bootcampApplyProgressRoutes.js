import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.BootcampApplyProgressCtrl.findAll)
router.get('/:id',indexController.BootcampApplyProgressCtrl.findOne)
router.post('/',indexController.BootcampApplyProgressCtrl.create)
router.put('/:id',indexController.BootcampApplyProgressCtrl.update)
router.delete('/:id',indexController.BootcampApplyProgressCtrl.deleted)

export default router