'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Feedback extends sequelize_1.Model {
        static associate(models) {
            Feedback.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
        }
    }
    Feedback.init({
        rate: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        content: DataTypes.STRING,
        deleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Feedback',
    });
    return Feedback;
};
