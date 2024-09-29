'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            User.hasMany(models.Feedback, { foreignKey: 'user_id', as: 'feedbacks' });
        }
    }
    User.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
