'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      { name: 'John Doe', username: 'johndoe' },
      { name: 'Tris Nevin', username: 'tnevin0' },
      { name: 'Kylen MacUchadair', username: 'kmacuchadair1' },
      { name: 'Slade Barenski', username: 'sbarenski2' },
      { name: 'Edwin Chin', username: 'echin3' },
      { name: 'Melisandra Spellsworth', username: 'mspellsworth4' }
    ]);

    const users = await queryInterface.sequelize.query(
      `SELECT id from user;`
    );

    const usersRows = users[0];

    return await queryInterface.bulkInsert('auth', [
      {username: 'johndoe', password: '$2b$05$FK0JWiSPQ/rui9of5a8oMu2JafOzJ/nH06DGg4D36YT8stpODizFa', user_id: usersRows[0].id},
      {username: 'tnevin0', password: '$2b$05$0pbJoMqTNDdrzMYDMOdU/ePnZIomgmUayJaFlwNzn6E/0l1kRPt4S', user_id: usersRows[1].id},
      {username: 'kmacuchadair1', password: '$2b$05$zBkY.JKGkRQbkCnWmoQyVuSFkNBqfq83MGCz1ukcLC/tLHpdiUevm', user_id: usersRows[2].id},
      {username: 'sbarenski2', password: '$2b$05$PVpbXAt8EKStRZZsaAFxM.XSsHCQT74FJmSq7qc3W..yo0P43udoK', user_id: usersRows[3].id},
      {username: 'echin3', password: '$2b$05$cbKv4acf1zcpFdBV14rysu4jNP0Xu.NK2KfdkNJW.5ByxxzIBmOre', user_id: usersRows[4].id},
      {username: 'mspellsworth4', password: '$2b$05$Ifus25IamX0hSW9RoHe0ue8O6fHkhbEaWE6duf6ow9ioY3kXQfbRK', user_id: usersRows[5].id}
    ], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
