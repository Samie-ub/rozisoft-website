const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
router.post("/add-project", async (req, res) => {
  try {
    const { backgroundImageUrl, projectCategory, projectName } = req.body;

    const newProject = new Project({
      backgroundImageUrl,
      projectCategory,
      projectName,
    });

    await newProject.save();

    res.status(201).json({ message: "Project added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add Project" });
  }
});

router.get("/all-project", async (req, res) => {
  try {
    console.log("Attempting to fetch project...");
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to retrieve projects" });
  }
});

router.delete("/delete-project/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    await Project.findByIdAndDelete(projectId);

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

module.exports = router;
