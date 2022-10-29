const express = require('express');

const response = require('./../../../network/response');
const Controller = require('./index');

const router = express.Router();

// ROUTES
router.get('/:id', get);
// used for development purpose only
// router.get('/', list);
async function list (req, res, next) {
  try {
    const data = await Controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function get(req, res, next) {
    try {
    const { id } = req.params;
    const user = await Controller.get(id);

    response.success(req, res, user, 200);
  } catch (error) {
    next(error, req, res);
  }
}

module.exports = router;
