// const store = require('./../../../store/mysql');
const Store = require('./../../../store/remote-mysql');
const Controller = require('./controller');

module.exports = Controller(Store);
