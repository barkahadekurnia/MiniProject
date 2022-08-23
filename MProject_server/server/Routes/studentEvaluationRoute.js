import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.StudEvCtrl.findAll)
router.get('/',indexController.StudEvCtrl.findOne)

export default router