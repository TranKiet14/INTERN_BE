import { Request, Response } from "express"
import responseUtils from "utils/responseUtils"
import categoryService from "modules/category/services/categoryService"
import client from "configs/redis"

const categoryController = {
    index: async (req: Request, res: Response) => {
        const categories = await categoryService.list();
        try {
            await client.set("categories", JSON.stringify(categories), { EX: 900 });
        } catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils.ok(res, categories);
    },
    getCategoryParent: async (req: Request, res: Response) => {
        const categories = await categoryService.getCategoryParent();
        try {
            await client.set("categories-parent", JSON.stringify(categories), { EX: 900 });
        } catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils.ok(res, categories);
    },
    getCategoryChildren: async (req: Request, res: Response) => {
        const categories = await categoryService.getCategoryChildren(parseInt(req.params.id));
        if(categories){
            try {
                await client.set(`categories-children-${req.params.id}`, JSON.stringify(categories), { EX: 900 });
            } catch (error) {
                console.error("Lỗi!!!", error);
            }
        }
        responseUtils.ok(res, categories);
    },
}

export default categoryController