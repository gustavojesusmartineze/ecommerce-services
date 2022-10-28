const config = require('./../config');

const USER = encodeURIComponent(config.db.mysql.user);
const PASSWORD = encodeURIComponent(config.db.mysql.password);
const DATABASE = config.db.mysql.database;
//we use localhost because we are accessing mysql outside the container
const HOST = 'localhost';
const PORT = config.db.mysql.port;


const URI = `mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql',
  },
  production: {
    url: URI,
    dialect: 'mysql',
  }
}
