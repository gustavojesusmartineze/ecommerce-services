const express = require('express');

const auth = require('./secure');
const Controller = require('./index');

const response = require('./../../../network/response');
const validatorHandler = require('./../../../network/validator.handler');
const {
  createReviewSchema,
  updateReviewSchema,
  getReviewSchema
} = require('./../../../db/schemas/review.schema');

const router = express.Router();

// Routes
router.get('/:productId',
  validatorHandler(getReviewSchema, 'params'),
  get
);
router.post('/:productId',
  auth('add'),
  validatorHandler(createReviewSchema, 'body'),
  create
);
router.put('/:productId',
  auth('update', { owner: 'user' }),
  validatorHandler(updateReviewSchema, 'body'),
  update
);
router.delete('/:productId',
  auth('delete', { owner: 'user' }),
  validatorHandler(getReviewSchema, 'params'),
  remove
);

async function get(req, res, next) {
  try {
    const { productId } = req.params;
    const review = await Controller.get(productId);

    response.success(req, res, review, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function create(req, res, next) {
  try {
    const { productId } = req.params;
    let body  = req.body;
    body.userId = req.user.id;
    body.productId = productId;

    const review = await Controller.create(body);

    response.success(req, res, review, 201);
  } catch (error) {
    next(error, req, res);
  }
}

async function update(req, res, next) {
  try {
    const body  = req.body;
    body.user_id = req.user.id;
    const { productId } = req.params;
    const review = await Controller.update(productId, body);

    response.success(req, res, review, 201);
  } catch (error) {
    next(error, req, res);
  }
}

async function remove(req, res, next) {
  try {
    const { productId } = req.params;
    const deleted = await Controller.remove(productId, req.user.id);

    response.success(req, res, deleted, 204);
  } catch (error) {
    next(error, req, res);
  }
}

module.exports = router;
