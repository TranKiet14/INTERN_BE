'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ProductImage extends sequelize_1.Model {
        static associate(models) {
            ProductImage.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
        }
    }
    ProductImage.init({
        product_id: DataTypes.INTEGER,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ProductImage',
    });
    return ProductImage;
};
