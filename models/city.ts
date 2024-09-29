'use strict';
import {
  Model
} from 'sequelize';
interface CityAttributes {
  title: string,
  deleted: boolean
}
module.exports = (sequelize: any, DataTypes: any) => {
  class City extends Model<CityAttributes> implements CityAttributes {
    title: string;
    deleted: boolean
    static associate(models: any) {
      // define association here
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