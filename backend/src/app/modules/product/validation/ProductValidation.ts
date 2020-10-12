import Joi from "joi";

export const productSchema = Joi.object({
  sku: Joi.string().alphanum().required(),
  prodName: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
  description: Joi.string().required(),
});
