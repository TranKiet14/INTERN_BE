import db from "models/index";
const logoService = {
    list: async () => {
        const logos = await db.Logo.findAll({
            where: {
                deleted: false
            }
        });
        return logos
    },
}
export default logoService