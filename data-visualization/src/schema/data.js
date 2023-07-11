const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  exercise: String,
  weight: String,
  reps: String,
  date: String,
  username: String,
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
