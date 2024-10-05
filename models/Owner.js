const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: String,
  age: Number,
  lastName: String,
  email: String,
  phoneNumber: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  city: String,
  puppets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Puppets",
      required: false,
      collection: "Puppets",
    },
  ],
});

const owner = mongoose.model("Owners", ownerSchema, "Owners");

module.exports = owner;
