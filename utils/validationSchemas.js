const joi = require("joi");

const ownerSchema = joi.object({
  name: joi.string().required(),
  age: joi.number().integer().min(0).max(180).required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  phoneNumber: joi.string().required(),
  birthday: joi.date().required(),
  address: joi
    .object({
      street: joi.string().required(),
      city: joi.string().required(),
      state: joi.string().required(),
      zip: joi.string().required(),
    })
    .required(),
  puppets: joi.array().items(joi.string().hex()),
});

const puppetSchema = joi.object({
  name: joi.string().required(),
  age: joi.number().integer().min(0).required(),
  race: joi.string().required(),
  breed: joi.string().required(),
  color: joi.string().required(),
  ownerId: joi.string().hex(),
});

module.exports = {
  ownerSchema,
  puppetSchema,
};
