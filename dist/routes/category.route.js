"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = require("express");
const validations_1 = require("kernels/validations");
const categoryController_1 = __importDefault(require("modules/category/controllers/categoryController"));
const categoryValidation_1 = __importDefault(require("modules/category/validations/categoryValidation"));
const categoryCache_1 = __importDefault(require("kernels/middlewares/cache/categoryCache"));
const router = (0, express_1.Router)();
router.get("/", categoryCache_1.default.getAll, categoryController_1.default.index);
router.get("/parent", categoryCache_1.default.getCategoryParent, categoryController_1.default.getCategoryParent);
router.get("/children/:id", (0, validations_1.validate)([categoryValidation_1.default.checkParams]), categoryCache_1.default.getCategoryChildren, categoryController_1.default.getCategoryChildren);
exports.categoryRoutes = router;
