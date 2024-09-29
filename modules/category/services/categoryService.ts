import db from "models/index";
const categoryService = {
    list: async () => {
        const categories = await db.Category.findAll({
            where: {
                deleted: false
            }
        });
        return categories
    },
    getCategoryParent: async () => {
        const categories = await db.Category.findAll({
            where: {
                deleted: false,
                parent_id: null
            }
        });
        return categories
    },
    getCategoryChildren: async (id: number) => {
        const category = await db.Category.findOne({
            where: {
                deleted: false,
                id: id
            }
        });
        if(category){
            const children = await db.Category.findAll({
                where: {
                    deleted: false,
                    parent_id: id
                }
            });
            const newCategory = {
                id: category.id,
                title: category.title,
                thumbnail: category.thumbnail,
                slug: category.slug,
                children: children
            }
            return newCategory
        }
        return null
    },
}
export default categoryService