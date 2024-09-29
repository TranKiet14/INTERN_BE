'use strict';
import {
  Model
} from 'sequelize';
interface LogoAttributes {
  image: string,
  deleted: boolean
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Logo extends Model<LogoAttributes> implements LogoAttributes {
    image: string;
    deleted: boolean
    static associate(models: any) {
      // define association here
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