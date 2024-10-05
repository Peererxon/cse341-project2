const Owner = require("../models/Owner");

const getAllOwners = async () => {
  const puppets = await Owner.find();
  console.log(puppets);
  return puppets;
};

const getOwnerById = async (id) => Owner.findById(id);

const createOwner = async (input) => {
  const createdOwner = await Owner.create(input);
  const savedOwner = await createdOwner.save();
  return savedOwner;
};

const updateOwnerByID = async (id, input) => {
  const ownerUpdate = await Owner.findByIdAndUpdate(id, input, { new: true });
  return ownerUpdate;
};

const deleteOwnerByID = async (id) => {
  const ownerDeleted = await Owner.findByIdAndDelete(id);
  return ownerDeleted;
};

module.exports = {
  getAllOwners,
  getOwnerById,
  createOwner,
  updateOwner: updateOwnerByID,
  deleteOwner: deleteOwnerByID,
};
