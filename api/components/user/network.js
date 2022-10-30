const express = require('express');

const response = require('./../../../network/response');
const controller = require('./index');

const validatorHandler = require('./../../../network/validator.handler');
const { createUserSchema, getUserSchema } = require('./../../../db/schemas/user.schema');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  get
);
router.post('/',
  validatorHandler(createUserSchema, 'body'),
  create
);

async function list (req, res, next) {
  try {
    const data = await controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function get(req, res, next) {
  try {
    const { id } = req.params;
    const user = await controller.get(id);

    response.success(req, res, user, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function create(req, res, next) {
  try {
    const body  = req.body;
    const user = await controller.create(body);

    response.success(req, res, user, 201);
  } catch (error) {
    next(error, req, res);
  }
}

module.exports = router;
