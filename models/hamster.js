const mongoose = require("mongoose");

const { getIdValue } = require("../helpers/db");

const hamsterSchema = mongoose.Schema({
  _id: {
    type: String,
    minlength: 5,
    default: getIdValue
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Hamster", hamsterSchema);
