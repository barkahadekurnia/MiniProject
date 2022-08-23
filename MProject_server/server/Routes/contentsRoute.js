import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.ContentCtrl.findAll)
router.get('/',indexController.ContentCtrl.findOne)
router.put('/',indexController.ContentCtrl.create)


export default router