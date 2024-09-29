'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Category extends sequelize_1.Model {
        static associate(models) {
            Category.hasMany(models.Product, { foreignKey: 'category_id', as: 'products' });
        }
    }
    Category.init({
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        slug: DataTypes.STRING,
        deleted: DataTypes.BOOLEAN,
        parent_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Category',
    });
    return Category;
};
