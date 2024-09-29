"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const base_1 = __importDefault(require("./base"));
"kernels/rules/base";
class BodyWithLocale extends base_1.default {
    constructor(field) {
        super(field);
        this.withLocale = (0, express_validator_1.body)(field);
    }
}
exports.default = BodyWithLocale;
