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

// Add route to fetch a single project's details
router.get("/project-details/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project details:", error);
    res.status(500).json({ error: "Failed to retrieve project details" });
  }
});

router.put("/update-project/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const { backgroundImageUrl, projectCategory, projectName } = req.body;

    const updatedProject = {
      backgroundImageUrl,
      projectCategory,
      projectName,
    };

    await Project.findByIdAndUpdate(projectId, updatedProject);

    res.status(200).json({ message: "Project updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update project" });
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
