import db from "models/index";
const productService = {
    getBySlugCategory: async (slug: string) => {
        const category = await db.Category.findOne({
            where: {
                deleted: false,
                slug: slug
            }
        })
        if(category) {
            const products = await db.Product.findAll({
                where: {
                    deleted: false,
                    category_id: category.id
                }
            });
            return products
        }
        return null;
    },
}
export default productService