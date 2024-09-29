import responseUtils from "utils/responseUtils";
import productService from "modules/product/services/productService";
import { Request, Response } from "express";
import client from "configs/redis";


const productController = {
    getBySlugCategory: async (req: Request, res: Response) => {
        const products = await productService.getBySlugCategory(req.params.slug);
        try {
            await client.set(`${req.params.slug}-products`, JSON.stringify(products), { EX: 900 })
        } catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils.ok(res, products);
    },
}

export default productController