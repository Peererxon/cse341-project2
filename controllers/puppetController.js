const createError = require("http-errors");
const { isValidObjectId } = require("mongoose");
const puppetService = require("../services/puppetService");
const { httpStatus } = require("../utils/HttpStatus");

const getAllPuppets = async (req, res, next) => {
  // validations

  try {
    const puppets = await puppetService.getAllPuppets();
    if (!puppets) {
      return next(
        createError(httpStatus.NOT_FOUND, "No puppets found in the database"),
      );
    }
    res.status(httpStatus.OK).json(puppets);
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error getting puppets",
      ),
    );
  }
};

const getPuppetById = async (req, res, next) => {
  try {
    const puppet = await puppetService.getAllPuppets(req.params.id);
    if (!puppet) {
      return next(
        createError(httpStatus.NOT_FOUND, "No puppets found in the database"),
      );
    }
    res.status(httpStatus.OK).json(puppet);
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error getting puppet",
      ),
    );
  }
};

const createPuppet = async (req, res, next) => {
  try {
    const puppet = await puppetService.createPuppet(req.body);
    res.status(httpStatus.CREATED).json(puppet);
  } catch (error) {
    next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error creating the puppet",
      ),
    );
  }
};

const updatePuppet = async (req, res, next) => {
  try {
    const puppetUpdate = await puppetService.updatePuppet(
      req.params.id,
      req.body,
    );
    if (!puppetUpdate) {
      return next(
        createError(
          httpStatus.NOT_FOUND,
          `Puppet with ${req.params.id} not found`,
        ),
      );
    }
    res.status(httpStatus.OK).json(puppetUpdate);
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error updating the puppet",
      ),
    );
  }
};

const deletePuppet = async (req, res, next) => {
  try {
    const puppetDeleted = await puppetService.deletePuppet(req.params.id);
    if (!puppetDeleted) {
      return next(
        createError(
          httpStatus.NOT_FOUND,
          `Puppet with ${req.params.id} not found`,
        ),
      );
    }
    res.status(httpStatus.DELETED).send();
  } catch (error) {
    return next(
      createError(
        httpStatus.SERVER_ERROR,
        error.message || "Error deleting the puppet",
      ),
    );
  }
};

module.exports = {
  getAllPuppets,
  getPuppetById,
  createPuppet,
  updatePuppet,
  deletePuppet,
};
