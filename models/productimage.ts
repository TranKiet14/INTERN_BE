'use strict';
import {
  Model
} from 'sequelize';
interface ProductImageAttributes {
  product_id: number,
  image: string
}
module.exports = (sequelize: any, DataTypes: any) => {
  class ProductImage extends Model<ProductImageAttributes> implements ProductImageAttributes {
    product_id: number;
    image: string
    static associate(models: any) {
      ProductImage.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' })
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