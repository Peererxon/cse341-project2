const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGOSTRING);

mongoose.connection.once("open", () => {
  console.log("conneted to database");
});
