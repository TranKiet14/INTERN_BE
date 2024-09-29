import db from "models/index";
const cityService = {
    list: async () => {
        const cities = await db.City.findAll({
            where: {
                deleted: false
            }
        });
        return cities
    },
}
export default cityService