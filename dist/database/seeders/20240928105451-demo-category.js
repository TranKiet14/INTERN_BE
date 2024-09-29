'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        title: "Máy xúc",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093422/May-xuc.png",
        slug: "may-xuc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Máy xúc mini",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093417/May-mini.png",
        slug: "may-xuc-mini",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Máy xúc bánh xích",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093421/May-xuc-banh-xich-2.png",
        slug: "may-xuc-banh-xich",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Máy xúc lật",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/08/19205746/snapedit_1724075558828-1.png",
        slug: "may-xuc-lat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Máy xúc bánh lốp",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093405/Banh-Lop.png",
        slug: "may-xuc-banh-lop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Xe cẩu",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093436/Xe-cau-1.png",
        slug: "xe-cau",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cẩu xích",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093435/Xe-cau-xich.png",
        slug: "cau-xich",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cẩu lốp",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093434/Xe-cau-lop.png",
        slug: "cau-lop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cẩu tự hành",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093408/Cau-tu-hanh.png",
        slug: "cau-tu-hanh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Xe khoan",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/07/18170103/snapedit_1721296595181-1.png",
        slug: "xe khoan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Máy làm đường",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093415/May-lam-duong.png",
        slug: "may-lam-duong",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Xe san",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093439/Xe-san.png",
        slug: "xe-san",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Xe ủi",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093441/Xe-ui-1.png",
        slug: "xe-ui",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Xe lu",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093437/Xe-lu-1.png",
        slug: "xe-lu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Máy rải thảm nhựa",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093419/May-rai-nhua.png",
        slug: "may-rai-tham-nhua",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Máy phát điện",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093418/May-phat-dien.png",
        slug: "may-phat-dien",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Công suất 100-500 kVA",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/27082227/may-phat-dien-tren-500-kva-1-1.png",
        slug: "cong-suat-100-500-kVA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Công suất trên 500 kVA",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/08/07163824/may-phat-dien-cong-nghiep-1.png",
        slug: "cong-suat-duoi-500-kVA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Công suất dưới 100kVA",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/27082140/may-phat-dien-duoi-100-1.png",
        slug: "cong-suat-duoi-100-kVA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Boom Lift",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093422/May-xuc.png",
        slug: "boom-lift",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Articulating Boom Lift",
        thumbnail: "https://comac-pro.s3.ap-southeast-1.amazonaws.com/uploads/2024/06/13093422/May-xuc.png",
        slug: "articulating-boom-lift",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
