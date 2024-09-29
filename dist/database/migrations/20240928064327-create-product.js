'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      manufacturedYear: {
        type: Sequelize.INTEGER
      },
      priceByDay: {
        type: Sequelize.FLOAT
      },
      priceByWeek: {
        type: Sequelize.FLOAT
      },
      priceByMonth: {
        type: Sequelize.FLOAT
      },
      rate: {
        type: Sequelize.FLOAT
      },
      thumbnail: {
        type: Sequelize.TEXT
      },
      slug: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories', // Tên bảng mà khóa ngoại tham chiếu đến
          key: 'id', // Tên trường trong bảng mà khóa ngoại tham chiếu đến
        },
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};