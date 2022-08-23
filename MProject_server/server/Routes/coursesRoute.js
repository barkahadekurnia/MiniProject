import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.CoursesCtrl.findAll)
router.get('/',indexController.CoursesCtrl.findOne)
router.put('/',indexController.CoursesCtrl.create)

export default router