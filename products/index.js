const express = require('express');

const config = require('./../config');
const router = require('./components/product/network');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
} = require('./../network/error.handler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product', router);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.product.port, () => {
  console.log('Products service listening on port: ', config.product.port);
});
