import { Router } from "express"
import { validate } from "kernels/validations";
import categoryController from "modules/category/controllers/categoryController";
import categoryValidation from "modules/category/validations/categoryValidation";
import categoryCache from "kernels/middlewares/cache/categoryCache";
const router = Router()

router.get("/", categoryCache.getAll, categoryController.index);
router.get("/parent", categoryCache.getCategoryParent, categoryController.getCategoryParent);
router.get("/children/:id", validate([categoryValidation.checkParams]), categoryCache.getCategoryChildren, categoryController.getCategoryChildren);

export const categoryRoutes: Router = router;