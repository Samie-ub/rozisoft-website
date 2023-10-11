const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  backgroundImageUrl: {
    type: String,
    required: true,
  },
  cardTitle: {
    type: String,
    required: true,
  },
  cardSubServices: {
    type: String,
    required: true,
  },
  cardServices: {
    type: [String],
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
