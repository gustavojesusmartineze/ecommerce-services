const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(8);
const username = Joi.string().min(8);
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  name: name.required(),
  username: username.required(),
  password: password.required()
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, getUserSchema }
