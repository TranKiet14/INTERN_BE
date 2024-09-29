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
const index_1 = __importDefault(require("models/index"));
const categoryService = {
    list: () => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield index_1.default.Category.findAll({
            where: {
                deleted: false
            }
        });
        return categories;
    }),
    getCategoryParent: () => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield index_1.default.Category.findAll({
            where: {
                deleted: false,
                parent_id: null
            }
        });
        return categories;
    }),
    getCategoryChildren: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield index_1.default.Category.findOne({
            where: {
                deleted: false,
                id: id
            }
        });
        if (category) {
            const children = yield index_1.default.Category.findAll({
                where: {
                    deleted: false,
                    parent_id: id
                }
            });
            const newCategory = {
                id: category.id,
                title: category.title,
                thumbnail: category.thumbnail,
                slug: category.slug,
                children: children
            };
            return newCategory;
        }
        return null;
    }),
};
exports.default = categoryService;
