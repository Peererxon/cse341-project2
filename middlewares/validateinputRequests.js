const createError = require("http-errors");

const { ownerSchema, puppetSchema } = require("../utils/validationSchemas");
const { httpStatus } = require("../utils/HttpStatus");

const validateOwnerRequest = (req, res, next) => {
  const { error } = ownerSchema.validate(req.body);
  if (error) {
    return next(createError(httpStatus.BAD_REQUEST, error.message));
  }
  next();
};

const validatePuppetRequest = (req, res, next) => {
  const { error } = puppetSchema.validate(req.body);
  if (error) {
    console.log("🚀 ~ validatePuppetRequest ~ error", error);
    return next(createError(httpStatus.BAD_REQUEST, error.message));
  }
  next();
};

module.exports = { validateOwnerRequest, validatePuppetRequest };
