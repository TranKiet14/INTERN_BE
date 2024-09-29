import db from "models/index";
const feedbackService = {
    list: async () => {
        const feedbacks = await db.Feedback.findAll({
            where: {
                deleted: false
            },
            include: [{
                model: db.User,
                as: 'author',
            }],
        });
        return feedbacks
    },
}
export default feedbackService