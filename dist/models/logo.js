'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Logo extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Logo.init({
        image: DataTypes.STRING,
        deleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Logo',
    });
    return Logo;
};
