const { ValidationError } = require('sequelize');
const boom = require('@hapi/boom');

function logErrors (err, req, res, next) {
  console.error('logErrors reached');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.error('errorHandler reached');
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    // stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  console.error('boomErrorHandler reached');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  console.error('ormErrorHandler reached');
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}


module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
