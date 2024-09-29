import client from "configs/redis"
import { NextFunction, Request, Response } from "express"
import responseUtils from "utils/responseUtils";

const feedbackCache = {
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        const data = await client.get("feedbacks");
        if (data) {
            responseUtils.ok(res, JSON.parse(data))
        }
        else {
            next()
        }
    }
}

export default feedbackCache