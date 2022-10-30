const express = require('express');

const config = require('./../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
} = require('./../network/error.handler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.api.port, () => {
  console.log('API listening on port ', config.api.port);
});
