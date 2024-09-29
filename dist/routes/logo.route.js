"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoRoutes = void 0;
const express_1 = require("express");
const logoCache_1 = __importDefault(require("kernels/middlewares/cache/logoCache"));
const logoController_1 = __importDefault(require("modules/logo/controllers/logoController"));
const router = (0, express_1.Router)();
router.get("/", logoCache_1.default.getAll, logoController_1.default.index);
exports.logoRoutes = router;
