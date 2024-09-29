"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const app_1 = __importDefault(require("configs/app"));
const hashing_1 = __importDefault(require("configs/hashing"));
const jwt_1 = __importDefault(require("configs/jwt"));
exports.config = {
    app: app_1.default,
    jwt: jwt_1.default,
    hashing: hashing_1.default
};
