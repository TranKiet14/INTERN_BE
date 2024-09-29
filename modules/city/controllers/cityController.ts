import responseUtils from "utils/responseUtils";
import cityService from "modules/city/services/cityService";
import { Request, Response } from "express";
import client from "configs/redis";


const cityController = {
    index: async (req: Request, res: Response) => {
        const cities = await cityService.list();
        try {
            await client.set("cities", JSON.stringify(cities), { EX: 900 });
        } catch (error) {
            console.error("Lỗi!!!", error);
        }
        responseUtils.ok(res, cities);
    },
}

export default cityController