const createError = require("http-errors");
const { isValidObjectId } = require("mongoose");
const { httpStatus } = require("../utils/HttpStatus");

const validateHexId = (req, res, next) => {
  const isInvalidId = !isValidObjectId(req.params.id);
  if (isInvalidId) {
    return next(
      createError(
        httpStatus.BAD_REQUEST,
        "Invalid id provided,should be a HEX string",
      ),
    );
  }
  next();
};

module.exports = validateHexId;
