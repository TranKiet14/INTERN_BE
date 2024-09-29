import client from "configs/redis"
import { NextFunction, Request, Response } from "express"
import responseUtils from "utils/responseUtils";

const categoryCache = {
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        const data = await client.get("categories");
        if (data) {
            responseUtils.ok(res, JSON.parse(data))
        }
        else {
            next()
        }
    },
    getCategoryParent: async (req: Request, res: Response, next: NextFunction) => {
        const data = await client.get("categories-parent");
        if (data) {
            responseUtils.ok(res, JSON.parse(data))
        }
        else {
            next()
        }
    },
    getCategoryChildren: async (req: Request, res: Response, next: NextFunction) => {
        const data = await client.get(`categories-children-${req.params.id}`);
        if (data) {
            responseUtils.ok(res, JSON.parse(data))
        }
        else {
            next()
        }
    }
}

export default categoryCache