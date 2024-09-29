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
const categoryService_1 = __importDefault(require("modules/category/services/categoryService"));
const redis_1 = __importDefault(require("configs/redis"));
const categoryController = {
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield categoryService_1.default.list();
        try {
            yield redis_1.default.set("categories", JSON.stringify(categories), { EX: 900 });
        }
        catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils_1.default.ok(res, categories);
    }),
    getCategoryParent: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield categoryService_1.default.getCategoryParent();
        try {
            yield redis_1.default.set("categories-parent", JSON.stringify(categories), { EX: 900 });
        }
        catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils_1.default.ok(res, categories);
    }),
    getCategoryChildren: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield categoryService_1.default.getCategoryChildren(parseInt(req.params.id));
        if (categories) {
            try {
                yield redis_1.default.set(`categories-children-${req.params.id}`, JSON.stringify(categories), { EX: 900 });
            }
            catch (error) {
                console.error("Lỗi!!!", error);
            }
        }
        responseUtils_1.default.ok(res, categories);
    }),
};
exports.default = categoryController;
