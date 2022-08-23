import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.ProgCtrl.findAll)
router.get('/:id',indexController.ProgCtrl.findOne)
router.post('/',indexController.ProgCtrl.create)

export default router