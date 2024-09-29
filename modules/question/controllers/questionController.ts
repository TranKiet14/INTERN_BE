import responseUtils from "utils/responseUtils";
import questionService from "modules/question/services/questionService";
import { Request, Response } from "express";
import client from "configs/redis";

const questionController = {
    index: async (req: Request, res: Response) => {
        const questions = await questionService.list();
        try {
            await client.set("questions", JSON.stringify(questions), { EX: 900 })
        } catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils.ok(res, questions);
    },
}

export default questionController