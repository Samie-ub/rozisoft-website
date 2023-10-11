const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  backgroundImageUrl: {
    type: String,
    required: true,
  },
  projectCategory: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
