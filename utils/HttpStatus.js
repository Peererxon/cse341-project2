const httpStatus = {
  CREATED: 201,
  DELETED: 204,
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
};
Object.freeze(httpStatus);
module.exports = { httpStatus };
