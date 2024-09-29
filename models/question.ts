'use strict';
import {
  Model
} from 'sequelize';
interface QuestionAttributes {
  question: string,
  answer: string,
  deleted: boolean
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Question extends Model<QuestionAttributes> implements QuestionAttributes {
    question: string;
    answer:string;
    deleted: boolean;
    static associate(models: any) {
      // define association here
    }
  }
  Question.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};