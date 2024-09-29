import { Router } from "express"
import questionCache from "kernels/middlewares/cache/questionCache";
import questionController from "modules/question/controllers/questionController";

const router = Router()

router.get("/",questionCache.getAll, questionController.index);

export const questionRoutes: Router = router;