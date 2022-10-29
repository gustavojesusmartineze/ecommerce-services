'use strict';

const { ReviewSchema, REVIEW_TABLE } = require('../models/review.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(REVIEW_TABLE, ReviewSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(REVIEW_TABLE);
  }
};
