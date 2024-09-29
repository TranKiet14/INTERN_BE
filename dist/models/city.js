'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class City extends sequelize_1.Model {
        static associate(models) {
        }
    }
    City.init({
        title: DataTypes.STRING,
        deleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'City',
    });
    return City;
};
