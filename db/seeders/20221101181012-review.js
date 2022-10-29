'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id from user;`
    );

    const usersRows = users[0];

    return await queryInterface.bulkInsert('review', [
      { product_id: 'M20324', user_id: usersRows[0].id, score: 3 },
      { product_id: 'M20324', user_id: usersRows[1].id, score: 4 },
      { product_id: 'M20324', user_id: usersRows[2].id, score: 3 },
      { product_id: 'AC7836', user_id: usersRows[0].id, score: 4 },
      { product_id: 'AC7836', user_id: usersRows[1].id, score: 4 },
      { product_id: 'AC7836', user_id: usersRows[2].id, score: 5 },
      { product_id: 'AC7836', user_id: usersRows[3].id, score: 3 },
      { product_id: 'C77154', user_id: usersRows[0].id, score: 2 },
      { product_id: 'C77154', user_id: usersRows[1].id, score: 5 },
      { product_id: 'C77154', user_id: usersRows[2].id, score: 4 },
      { product_id: 'C77154', user_id: usersRows[3].id, score: 4 },
      { product_id: 'C77154', user_id: usersRows[4].id, score: 1 },
      { product_id: 'B42000', user_id: usersRows[0].id, score: 1 },
      { product_id: 'B42000', user_id: usersRows[1].id, score: 1 },
      { product_id: 'B42000', user_id: usersRows[2].id, score: 1 },
      { product_id: 'B42000', user_id: usersRows[3].id, score: 1 },
      { product_id: 'B42000', user_id: usersRows[4].id, score: 1 },
      { product_id: 'B42000', user_id: usersRows[5].id, score: 1 },
      { product_id: 'B42001', user_id: usersRows[0].id, score: 5 },
      { product_id: 'B42001', user_id: usersRows[1].id, score: 5 },
      { product_id: 'B42001', user_id: usersRows[2].id, score: 5 },
      { product_id: 'B42001', user_id: usersRows[5].id, score: 5 },
    ]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};


