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
const redis_1 = __importDefault(require("configs/redis"));
const responseUtils_1 = __importDefault(require("utils/responseUtils"));
const categoryCache = {
    getAll: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield redis_1.default.get("categories");
        if (data) {
            responseUtils_1.default.ok(res, JSON.parse(data));
        }
        else {
            next();
        }
    }),
    getCategoryParent: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield redis_1.default.get("categories-parent");
        if (data) {
            responseUtils_1.default.ok(res, JSON.parse(data));
        }
        else {
            next();
        }
    }),
    getCategoryChildren: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield redis_1.default.get(`categories-children-${req.params.id}`);
        if (data) {
            responseUtils_1.default.ok(res, JSON.parse(data));
        }
        else {
            next();
        }
    })
};
exports.default = categoryCache;
