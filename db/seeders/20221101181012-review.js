'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id from user ORDER BY ID DESC;`
    );

    const usersRows = users[0];

    return await queryInterface.bulkInsert('review', [
      { product_id: 'M20324', user_id: 1, score: 3 },
      { product_id: 'M20324', user_id: 2, score: 4 },
      { product_id: 'M20324', user_id: 3, score: 3 },
      { product_id: 'AC7836', user_id: 1, score: 4 },
      { product_id: 'AC7836', user_id: 2, score: 4 },
      { product_id: 'AC7836', user_id: 3, score: 5 },
      { product_id: 'AC7836', user_id: 4, score: 3 },
      { product_id: 'C77154', user_id: 1, score: 2 },
      { product_id: 'C77154', user_id: 2, score: 5 },
      { product_id: 'C77154', user_id: 3, score: 4 },
      { product_id: 'C77154', user_id: 4, score: 4 },
      { product_id: 'C77154', user_id: 5, score: 1 },
      { product_id: 'B42000', user_id: 1, score: 1 },
      { product_id: 'B42000', user_id: 2, score: 1 },
      { product_id: 'B42000', user_id: 3, score: 1 },
      { product_id: 'B42000', user_id: 4, score: 1 },
      { product_id: 'B42000', user_id: 5, score: 1 },
      { product_id: 'B42000', user_id: 6, score: 1 },
      { product_id: 'B42001', user_id: 1, score: 5 },
      { product_id: 'B42001', user_id: 2, score: 5 },
      { product_id: 'B42001', user_id: 3, score: 5 },
      { product_id: 'B42001', user_id: 6, score: 5 },
    ]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};


