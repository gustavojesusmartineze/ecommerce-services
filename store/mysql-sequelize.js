const { Sequelize } = require('sequelize');
const config = require('../config');

const setupModels = require('../db/models');


const USER = encodeURIComponent(config.db.mysql.user);
const PASSWORD = encodeURIComponent(config.db.mysql.password);
const DATABASE = config.db.mysql.database;
const HOST = config.db.mysql.host;
const PORT = config.db.mysql.port;

const URI=`mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
