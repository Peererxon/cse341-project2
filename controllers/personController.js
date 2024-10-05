const createError = require("http-errors");
const ownerService = require("../services/ownerService");
const { httpStatus } = require("../utils/HttpStatus");

const listAllPersons = async (req, res, next) => {
  try {
    const persons = await ownerService.getAllOwners();
    if (!persons) {
      return next(
        createError(httpStatus.NOT_FOUND, "No persons found in the database"),
      );
    }
    res.status(httpStatus.OK).json(persons);
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error getting persons",
      ),
    );
  }
};

const getPersonById = async (req, res, next) => {
  try {
    const person = await ownerService.getOwnerById(req.params.id);
    if (!person) {
      return next(
        createError(
          httpStatus.NOT_FOUND,
          `Person with ID ${req.params.id} not found`,
        ),
      );
    }
    res.status(httpStatus.OK).json(person);
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error getting the person",
      ),
    );
  }
};

const createPerson = async (req, res, next) => {
  try {
    const person = await ownerService.createOwner(req.body);
    res.status(httpStatus.CREATED).json(person);
  } catch (error) {
    next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error creating the person",
      ),
    );
  }
};

const updatePerson = async (req, res, next) => {
  try {
    const personUpdate = await ownerService.updateOwner(
      req.params.id,
      req.body,
    );
    if (!personUpdate) {
      return next(
        createError(
          httpStatus.NOT_FOUND,
          `Person with ID ${req.params.id} not found`,
        ),
      );
    }
    res.status(httpStatus.OK).json(personUpdate);
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error updating the person",
      ),
    );
  }
};

const deletePerson = async (req, res, next) => {
  try {
    const personDeleted = await ownerService.deleteOwner(req.params.id);
    if (!personDeleted) {
      return next(
        createError(
          httpStatus.NOT_FOUND,
          `Person with ID ${req.params.id} not found`,
        ),
      );
    }
    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error deleting the person",
      ),
    );
  }
};

module.exports = {
  listAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
};
