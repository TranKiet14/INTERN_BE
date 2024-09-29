import responseUtils from "utils/responseUtils";
import logoService from "modules/logo/services/logoService";
import { Request, Response } from "express";
import client from "configs/redis";


const logoController = {
    index: async (req: Request, res: Response) => {
        const logos = await logoService.list();
        try {
            await client.set("logos", JSON.stringify(logos), { EX: 900 })
        } catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils.ok(res, logos);
    },
}

export default logoController