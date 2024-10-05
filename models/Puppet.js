const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const puppetSchema = new Schema({
  name: String,
  age: Number,
  race: String,
  breed: String,
  color: String,
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
    required: false,
    collection: "Owners",
  },
});

const Puppet = mongoose.model("Puppets", puppetSchema, "Puppets");
module.exports = Puppet;
