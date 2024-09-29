"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const responseUtils_1 = __importDefault(require("utils/responseUtils"));
const { validationResult } = new express_validator_1.ExpressValidator({}, {}, {
    errorFormatter: (error) => ({
        field: error.path,
        message: error.msg,
    }),
});
const validate = (validationArray) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        for (let validation of validationArray) {
            for (let _validation of validation) {
                yield _validation.get().run(req);
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            next();
        }
        else {
            responseUtils_1.default.invalidated(res, {
                errors: errors.array(),
            });
        }
    });
};
exports.validate = validate;
