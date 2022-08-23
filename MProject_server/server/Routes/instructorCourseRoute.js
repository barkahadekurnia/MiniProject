import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router()

router.get('/',indexController.InstructorCtrl.findAll)
router.get('/',indexController.InstructorCtrl.findOne)

export default router