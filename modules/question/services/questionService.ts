import db from "models/index";
const questionService = {
    list: async () => {
        const questions = await db.Question.findAll({
            where: {
                deleted: false
            }
        });
        return questions
    },
}
export default questionService