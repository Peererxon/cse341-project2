const createError = require("http-errors");
const { httpStatus } = require("../utils/HttpStatus");

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return next(
    createError(
      httpStatus.UNAUTHORIZED,
      "You dont have permission to access this resource",
    ),
  );
};

module.exports = isAuth;
