import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.CourseRevCtrl.findAll)
router.get('/',indexController.CourseRevCtrl.findOne)

export default router