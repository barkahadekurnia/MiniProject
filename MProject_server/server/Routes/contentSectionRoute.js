import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.ContentSecCtrl.findAll)
router.get('/',indexController.ContentSecCtrl.findOne)

export default router