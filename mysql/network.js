const express = require('express');

const response = require('../network/response');
const Store = require('../store/mysql');

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.put('/:table/:id', update);
router.post('/:table/query', query);
router.delete('/:table/:id', remove);

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
    const data = await Store.get(req.params.table, req.params.id);

    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function insert(req, res, next) {
  try {
    const data = await Store.insert(req.params.table, req.body)

    response.success(req, res, data, 201);
  } catch (error) {
    next(error, req, res);
  }
}

async function update(req, res, next) {
  try {
    const data = await Store.update(req.params.table, req.body, req.params.id);

    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function query(req, res, next) {
  try {
    const data = await Store.query(req.params.table, req.body.query, req.body.join)

    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function remove(req, res, next) {
  try {
    const data = await Store.remove(req.params.table, req.params.id);

    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

module.exports = router;
