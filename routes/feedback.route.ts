import { Router } from "express"
import feedbackCache from "kernels/middlewares/cache/feedbackCache";
import feedbackController from "modules/feedback/controllers/feedbackController";

const router = Router()

router.get("/", feedbackCache.getAll, feedbackController.index);

export const feedbackRoutes: Router = router;