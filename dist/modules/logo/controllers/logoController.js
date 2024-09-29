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
const responseUtils_1 = __importDefault(require("utils/responseUtils"));
const logoService_1 = __importDefault(require("modules/logo/services/logoService"));
const redis_1 = __importDefault(require("configs/redis"));
const logoController = {
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const logos = yield logoService_1.default.list();
        try {
            yield redis_1.default.set("logos", JSON.stringify(logos), { EX: 900 });
        }
        catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils_1.default.ok(res, logos);
    }),
};
exports.default = logoController;
