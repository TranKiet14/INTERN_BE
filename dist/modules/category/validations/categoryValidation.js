"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = __importDefault(require("kernels/rules"));
const categoryValidation = {
    checkParams: [
        new rules_1.default.ParamWithLocale('id').matches(/^\d+$/),
    ]
};
exports.default = categoryValidation;
