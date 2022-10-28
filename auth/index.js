const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('./../utils/error');

function sign(data) {
  return jwt.sign(data, config.security.secret);
}

function verify(token) {
  try {
    return jwt.verify(token, config.security.secret);
  } catch (error) {
    throw error(error.message)
  }
}

const check = {
  own: function(req, owner) {
    const decoded = decodeHeader(req);
    console.log(decoded);

    if (decoded.id != owner) {
      throw error('Forbidden', 401);
    }
  },
  logged: function(req) {
    const decoded = decodeHeader(req);
    console.log(decoded);
  }
}

function getToken(auth) {
  // Bearer saqwasdasuasudiasduasdasd
  if (!auth) {
    throw error('Token is missing', 400);
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw error('Invalid Format', 400);
  }

  const token = auth.replace('Bearer ', '');

  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

module.exports = {
  sign,
  check
};
