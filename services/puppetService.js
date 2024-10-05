const Puppet = require("../models/Puppet");

const getAllPuppets = async () => {
  const puppets = await Puppet.find();
  console.log(puppets);
  return puppets;
};

const getPuppetById = async (id) => Puppet.findById(id);

const createPuppet = async (input) => {
  const newPuppet = await Puppet.create(input);
  const savedPuppet = await newPuppet.save();
  return savedPuppet;
};

const updatePuppet = async (id, input) => {
  const puppetUpdate = await Puppet.findByIdAndUpdate(id, input, { new: true });
  return puppetUpdate;
};

const deletePuppet = async (id) => {
  const puppetDeleted = await Puppet.findByIdAndDelete(id);
  return puppetDeleted;
};

module.exports = {
  getAllPuppets,
  getPuppetById,
  createPuppet,
  updatePuppet,
  deletePuppet,
};
