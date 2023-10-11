const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  adminID: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Admin', adminSchema);
