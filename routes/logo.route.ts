import { Router } from "express"
import logoCache from "kernels/middlewares/cache/logoCache";
import logoController from "modules/logo/controllers/logoController";

const router = Router()

router.get("/",logoCache.getAll, logoController.index);

export const logoRoutes: Router = router;