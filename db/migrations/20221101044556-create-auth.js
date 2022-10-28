'use strict';

const { AuthSchema, AUTH_TABLE } = require('./../models/auth.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(AUTH_TABLE, AuthSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(AUTH_TABLE);
  }
};
