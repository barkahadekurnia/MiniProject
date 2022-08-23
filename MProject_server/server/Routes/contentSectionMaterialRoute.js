import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.ContentSecMatCtrl.findAll)
router.get('/',indexController.ContentSecMatCtrl.findOne)

export default router