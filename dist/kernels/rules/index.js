"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_1 = __importDefault(require("kernels/rules/body"));
const param_1 = __importDefault(require("kernels/rules/param"));
const query_1 = __importDefault(require("kernels/rules/query"));
const rules = {
    BodyWithLocale: body_1.default,
    ParamWithLocale: param_1.default,
    QueryWithLocale: query_1.default
};
exports.default = rules;
