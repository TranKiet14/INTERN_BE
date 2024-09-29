'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends sequelize_1.Model {
        static associate(models) {
            Product.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
            Product.hasMany(models.ProductImage, { foreignKey: 'product_id', as: 'images' });
        }
    }
    Product.init({
        title: DataTypes.STRING,
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        manufacturedYear: DataTypes.INTEGER,
        priceByDay: DataTypes.FLOAT,
        priceByWeek: DataTypes.FLOAT,
        priceByMonth: DataTypes.FLOAT,
        rate: DataTypes.FLOAT,
        thumbnail: DataTypes.STRING,
        slug: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        deleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};
