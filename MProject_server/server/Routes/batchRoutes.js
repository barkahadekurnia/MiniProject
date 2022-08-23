import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.BatchCtrl.findAll)
router.get('/:id',indexController.BatchCtrl.findOne)
router.post('/',indexController.BatchCtrl.create)
router.put('/:id',indexController.BatchCtrl.update)
router.delete('/:id',indexController.BatchCtrl.deleted)

export default router