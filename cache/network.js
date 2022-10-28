const express = require('express');

const response = require('../network/response');
const Store = require('./../store/redis');

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.put('/:table', upsert);

async function list(req, res, next) {
  try {
    const data = await Store.list(req.params.table);
    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function get(req, res, next) {
  try {
    const data = await Store.get(req.params.table, req.params.id)
    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function upsert(req, res, next) {
  try {
    const data = await Store.upsert(req.params.table, req.body)
    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}


module.exports = router;
