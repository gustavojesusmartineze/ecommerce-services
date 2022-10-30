const express = require('express');

const config = require('./../config');
const router = require('./components/review/network');


const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
} = require('./../network/error.handler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/review', router);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(config.review.port, () => {
  console.log('Reviews service listening on port: ', config.review.port);
});
