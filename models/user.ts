'use strict';
import {
  Model,
} from 'sequelize'

interface UserAttributes {
  name: string
}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    name: string;
    static associate(models: any) {
      User.hasMany(models.Feedback, {foreignKey: 'user_id', as: 'feedbacks'})
    }
  }
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};