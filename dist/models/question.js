'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Question extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Question.init({
        question: DataTypes.STRING,
        answer: DataTypes.STRING,
        deleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Question',
    });
    return Question;
};
