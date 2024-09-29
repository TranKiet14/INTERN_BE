'use strict';
import {
  Model
} from 'sequelize';
interface CategoryAttributes {
  title: string,
  thumbnail: string,
  slug: string,
  deleted: boolean,
  parent_id: number
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model<CategoryAttributes> implements CategoryAttributes {
    title: string;
    thumbnail: string;
    slug: string;
    deleted: boolean;
    parent_id: number
    static associate(models: any) {
      Category.hasMany(models.Product, {foreignKey: 'category_id', as: 'products'})
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