"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRoutes = void 0;
const express_1 = require("express");
const cityCache_1 = __importDefault(require("kernels/middlewares/cache/cityCache"));
const cityController_1 = __importDefault(require("modules/city/controllers/cityController"));
const router = (0, express_1.Router)();
router.get("/", cityCache_1.default.getAll, cityController_1.default.index);
exports.cityRoutes = router;
