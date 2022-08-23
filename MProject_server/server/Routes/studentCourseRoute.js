import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.StudCoCtrl.findAll)
router.get('/',indexController.StudCoCtrl.findOne)

export default router