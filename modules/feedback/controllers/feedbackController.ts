import responseUtils from "utils/responseUtils";
import feedbackService from "modules/feedback/services/feedbackService";
import { Request, Response } from "express";
import client from "configs/redis";


const feedbackController = {
    index: async (req: Request, res: Response) => {
        const feedbacks = await feedbackService.list();
        try {
            await client.set("feedbacks", JSON.stringify(feedbacks), { EX: 900 })
        } catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils.ok(res, feedbacks);
    },
}

export default feedbackController