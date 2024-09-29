"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const productCache_1 = __importDefault(require("kernels/middlewares/cache/productCache"));
const productController_1 = __importDefault(require("modules/product/controllers/productController"));
const router = (0, express_1.Router)();
router.get("/category/:slug", productCache_1.default.getBySlugCategory, productController_1.default.getBySlugCategory);
exports.productRoutes = router;
