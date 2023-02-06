import Joi from "joi";

export const postCraftSchema = Joi.object({
  name: Joi.string().max(30).required(),
  material: Joi.string().max(30).required(),
  price: Joi.string(),
  description: Joi.string(),
  photo: Joi.string(),
});

export const putCraftSchema = Joi.object({
  name: Joi.string().max(30).required(),
  material: Joi.string().max(30).required(),
  price: Joi.string(),
  description: Joi.string(),
  photo: Joi.string(),
  _id: Joi.string().required(),
});

export const getAllCraftsSchema = Joi.array().items(
  Joi.object({
    name: Joi.string().max(30).required(),
    material: Joi.string().max(30).required(),
    price: Joi.string(),
    description: Joi.string(),
    photo: Joi.string(),
    _id: Joi.string().required(),
  })
);
