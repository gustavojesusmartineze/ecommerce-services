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
      { name: 'Melisandra Spellsworth', username: 'mspellsworth4' },
      { name: 'For Tests', username: 'fortests' }
    ]);

    const users = await queryInterface.sequelize.query(
      `SELECT id from user ORDER BY ID DESC;`
    );

    const usersRows = users[0];

    return await queryInterface.bulkInsert('auth', [
      {username: 'johndoe', password: '$2b$05$FK0JWiSPQ/rui9of5a8oMu2JafOzJ/nH06DGg4D36YT8stpODizFa', user_id: 1 },
      {username: 'tnevin0', password: '$2b$05$0pbJoMqTNDdrzMYDMOdU/ePnZIomgmUayJaFlwNzn6E/0l1kRPt4S', user_id: 2 },
      {username: 'kmacuchadair1', password: '$2b$05$zBkY.JKGkRQbkCnWmoQyVuSFkNBqfq83MGCz1ukcLC/tLHpdiUevm', user_id: 3 },
      {username: 'sbarenski2', password: '$2b$05$PVpbXAt8EKStRZZsaAFxM.XSsHCQT74FJmSq7qc3W..yo0P43udoK', user_id: 4 },
      {username: 'echin3', password: '$2b$05$cbKv4acf1zcpFdBV14rysu4jNP0Xu.NK2KfdkNJW.5ByxxzIBmOre', user_id: 5 },
      {username: 'mspellsworth4', password: '$2b$05$Ifus25IamX0hSW9RoHe0ue8O6fHkhbEaWE6duf6ow9ioY3kXQfbRK', user_id: 6 },
      {username: 'fortests', password: '$2b$05$Ifus25IamX0hSW9RoHe0ue8O6fHkhbEaWE6duf6ow9ioY3kXQfbRK', user_id: 7 }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
