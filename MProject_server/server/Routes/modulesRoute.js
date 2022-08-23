import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = new Router();

router.get("/", indexController.ModulesCtrl.findAll);
router.get("/:name", indexController.ModulesCtrl.findOne);
router.post("/", indexController.ModulesCtrl.create);
router.put("/:name", indexController.ModulesCtrl.update);
router.delete("/:name", indexController.ModulesCtrl.deleted);

export default router;
