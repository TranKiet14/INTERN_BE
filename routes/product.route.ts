import { Router } from "express"
import productCache from "kernels/middlewares/cache/productCache";
import productController from "modules/product/controllers/productController";

const router = Router()

router.get("/category/:slug",productCache.getBySlugCategory, productController.getBySlugCategory);

export const productRoutes: Router = router;