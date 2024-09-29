"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRoutes = void 0;
const express_1 = require("express");
const questionCache_1 = __importDefault(require("kernels/middlewares/cache/questionCache"));
const questionController_1 = __importDefault(require("modules/question/controllers/questionController"));
const router = (0, express_1.Router)();
router.get("/", questionCache_1.default.getAll, questionController_1.default.index);
exports.questionRoutes = router;
