import Joi from "joi";

//User Schema
const userSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string()
    .email()
    .required()
    .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  password: Joi.string()
    .required()
    .pattern(/^.{8,10}$/),
});

//Books Schema
const booksSchemaValidation = Joi.object({
  title: Joi.string().min(3).max(20).required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  publishDate: Joi.string().required(),
});

export { userSchemaValidation, booksSchemaValidation };