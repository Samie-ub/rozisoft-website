import React, { useState } from "react";
import axios from "axios";

import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";

function ProjectSetup() {
  const [newProject, setNewProject] = useState({
    backgroundImageUrl: "",
    projectCategory: "",
    projectName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios
      .post("https://rozisoft-com-backend.vercel.app/project/add-project", newProject)
      .then((response) => {
        console.log(response.data);
        toast.success("Project added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setNewProject({
          backgroundImageUrl: "",
          projectCategory: "",
          projectName: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to add Project", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <div>
      <ToastContainer />
      <Grid container>
        <Grid item lg={11.5}>
          <Grid
            container
            sx={{ justifyContent: { xs: "center", md: "space-between" } }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{
                display: { xs: "none", md: "block" },
                justifyContent: { xs: "center", md: "space-between" },
              }}
            >
              <Sidebar />
            </Grid>
            <Grid item xs={12} lg={9} py={5}>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs={12} lg={5}>
                  <div className="dash-service-card">
                    <div className="card">
                      <div
                        className="card-bg"
                        style={{
                          backgroundImage: `url(${newProject.backgroundImageUrl})`,
                        }}
                      ></div>
                      <div className="card-content-project">
                        <div className="flex justify-between">
                          <span>{newProject.projectCategory}</span>
                          <hr />
                        </div>
                        <p>{newProject.projectName}</p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={5}>
                  <form
                    action=""
                    className="service-das-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="url"
                      placeholder="add Background Image URL"
                      name="backgroundImageUrl"
                      required
                      value={newProject.backgroundImageUrl}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="add Project Category"
                      name="projectCategory"
                      required
                      value={newProject.projectCategory}
                      onChange={handleChange}
                    />

                    <input
                      type="text"
                      placeholder="add project name"
                      name="projectName"
                      required
                      value={newProject.projectName}
                      onChange={handleChange}
                    />
                    <button type="submit" className="btn" onClick={handleSave}>
                      Save
                    </button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectSetup;
