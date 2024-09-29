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
const express_validator_1 = require("express-validator");
const stringUtils_1 = __importDefault(require("utils/stringUtils"));
class WithLocale {
    constructor(field) {
        this.withLocale = (0, express_validator_1.body)(field);
        this.field = field;
    }
    notEmpty() {
        this.withLocale = this.withLocale.notEmpty().withMessage(stringUtils_1.default.capitalize(this.field) + " must be required").bail();
        return this;
    }
    isEmail() {
        this.withLocale = this.withLocale.isEmail().withMessage(stringUtils_1.default.capitalize(this.field) + " is not in correct format").bail();
        return this;
    }
    isLength(options) {
        if (options.min) {
            this.withLocale = this.withLocale.isLength({ min: options.min }).withMessage(stringUtils_1.default.capitalize(this.field) + " must be at least " + options.min + " characters long").bail();
        }
        if (options.max) {
            this.withLocale = this.withLocale.isLength({ max: options.max }).withMessage(stringUtils_1.default.capitalize(this.field) + " must be at most " + options.max + " characters long").bail();
        }
        return this;
    }
    confirmed(fieldToCompare) {
        this.withLocale = this.withLocale.custom((value, { req }) => {
            if (value !== req.body[fieldToCompare]) {
                throw new Error(stringUtils_1.default.capitalize(this.field) + " and " + fieldToCompare + " do not match");
            }
            return true;
        }).bail();
        return this;
    }
    unique(sequelizeModel, field) {
        this.withLocale = this.withLocale.custom((value) => __awaiter(this, void 0, void 0, function* () {
            const recordExist = yield sequelizeModel.findOne({
                where: {
                    [field]: value
                }
            });
            if (recordExist) {
                throw new Error(stringUtils_1.default.capitalize(this.field) + " must be unique");
            }
        })).bail();
        return this;
    }
    isString() {
        this.withLocale = this.withLocale.isString().withMessage(stringUtils_1.default.capitalize(this.field) + " must be text").bail();
        return this;
    }
    isNumberic() {
        this.withLocale = this.withLocale.isNumeric().withMessage(stringUtils_1.default.capitalize(this.field) + " must be number").bail();
        return this;
    }
    isIn(check, against) {
        this.withLocale = this.withLocale.isIn(check, against).withMessage(this.field + " must be in allowable range").bail();
        return this;
    }
    get() {
        return this.withLocale;
    }
}
exports.default = WithLocale;
