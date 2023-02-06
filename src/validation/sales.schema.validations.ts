import Joi from "joi";

export const salesSchema = Joi.object({
  userId: Joi.string().required(),
  crafts: Joi.array().items({
    name: Joi.string().max(30).required(),
    material: Joi.string().max(30).required(),
    price: Joi.string(),
    description: Joi.string(),
    photo: Joi.string(),
    _id: Joi.string().required(),
    sales: Joi.array().items(Joi.number()),
  }),
});
