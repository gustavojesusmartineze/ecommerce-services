const Joi = require('joi');

const productId = Joi.string().min(1).max(32);
const score = Joi.number().min(1).max(5);

const createReviewSchema = Joi.object({
  score: score.required(),
});

const updateReviewSchema = Joi.object({
  score: score.required(),
});

const getReviewSchema = Joi.object({
  productId: productId.required(),
});

module.exports = { createReviewSchema, updateReviewSchema, getReviewSchema }
