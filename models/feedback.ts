'use strict';
import {
  Model
} from 'sequelize';
interface FeedbackAttributes {
  rate: number,
  user_id: number,
  content: string,
  deleted: boolean
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Feedback extends Model<FeedbackAttributes> implements FeedbackAttributes {
    rate: number;
    user_id: number;
    content: string;
    deleted: boolean
    static associate(models: any) {
      Feedback.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' })
    }
  }
  Feedback.init({
    rate: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};