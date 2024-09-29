"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = require("express");
const feedbackCache_1 = __importDefault(require("kernels/middlewares/cache/feedbackCache"));
const feedbackController_1 = __importDefault(require("modules/feedback/controllers/feedbackController"));
const router = (0, express_1.Router)();
router.get("/", feedbackCache_1.default.getAll, feedbackController_1.default.index);
exports.feedbackRoutes = router;
