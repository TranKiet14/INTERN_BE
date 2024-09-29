import { Router } from "express"
import cityCache from "kernels/middlewares/cache/cityCache";
import cityController from "modules/city/controllers/cityController";

const router = Router()

router.get("/",cityCache.getAll, cityController.index);

export const cityRoutes: Router = router;