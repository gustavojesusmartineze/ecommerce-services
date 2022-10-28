const express = require('express');

const config = require('./../config');
const router = require('./network');

const app = express();

app.use(express.json());

// ROUTES
app.use('/', router)

app.listen(config.cacheService.port, () => {
  console.log('Redis Cache service listening on port: ', config.cacheService.port);
});
