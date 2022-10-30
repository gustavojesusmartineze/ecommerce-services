const express = require('express');

const config = require('./../config');
const router = require('./network');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
} = require('./../network/error.handler');

const app = express();

app.use(express.json());

// ROUTES
app.use('/', router);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.mysqlService.port, () => {
  console.log('MySQL service listening on port: ', config.mysqlService.port);
});
