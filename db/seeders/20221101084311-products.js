'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('product', [
      { id: 'M20324', payload: JSON.stringify({ message: 'Product redirect', location: 'https://www.adidas.co.uk/stan_smith' }) },
      { id: 'AC7836', payload: JSON.stringify({ message: 'Product redirect', location: 'https://www.adidas.co.uk/ultraboost' }) },
      { id: 'C77154', payload: JSON.stringify({ message: 'Product redirect', location: 'https://www.adidas.co.uk/superstar' }) },
      { id: 'B42000', payload: JSON.stringify({ message: 'Product redirect', location: 'https://www.adidas.co.uk/campus' }) },
      { id: 'B42001', payload: JSON.stringify({ message: 'Product redirect', location: 'https://www.adidas.co.uk/superstar' }) }
    ]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
