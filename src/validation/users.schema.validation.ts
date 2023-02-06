import Joi from "joi";

export const postUserSchema = Joi.object({
  email: Joi.string().max(30).required(),
  password: Joi.string().max(30).required(),
  role: Joi.string(),
  first_name: Joi.string(),
  last_name: Joi.string(),
});

export const authenticateUserSchema = Joi.array().items(
  Joi.object({
    email: Joi.string().max(30).required(),
    password: Joi.string().max(30).required(),
  })
);
