'use strict';
import {
  Model
} from 'sequelize';
interface ProductAttributes {
  title: string,
  brand: string,
  model: string,
  manufacturedYear: number,
  priceByDay: number,
  priceByWeek: number,
  priceByMonth: number,
  rate: number,
  thumbnail: string,
  slug: string,
  category_id: number,
  deleted: boolean
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    title: string;
    brand: string;
    model: string;
    manufacturedYear: number;
    priceByDay: number;
    priceByWeek: number;
    priceByMonth: number;
    rate: number;
    thumbnail: string;
    slug: string;
    category_id: number
    deleted: boolean
    static associate(models: any) {
      Product.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
      Product.hasMany(models.ProductImage, {foreignKey: 'product_id', as: 'images'})
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