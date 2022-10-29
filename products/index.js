const express = require('express');

const config = require('./../config');
const router = require('./components/product/network');
const errors = require('./../network/errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product', router);

app.use(errors);


app.listen(config.product.port, () => {
  console.log('Products service listening on port: ', config.product.port);
});
