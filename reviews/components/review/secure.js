const auth = require('../../../auth');
const Controller = require('./index');

function checkAuth(action, options) {
	async function middleware(req, res, next) {
    switch(action) {
      case 'add':
      case 'delete':
      case 'update':
        auth.check.logged(req);
        next()
        break;

      default:
        next();
    }
	}

	return middleware;
}

module.exports = checkAuth;
