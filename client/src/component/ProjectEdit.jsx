import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

function ProjectEdit() {
  const { projectId } = useParams();
  const [formData, setFormData] = useState({
    backgroundImageUrl: "",
    projectCategory: "",
    projectName: "",
  });

  useEffect(() => {
    if (projectId) {
      fetch(`https://rozisoft-website-backend.vercel.app/project/project-details/${projectId}`)
        .then((response) => response.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching project details:", error);
        });
    }
  }, [projectId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (projectId) {
      axios
        .put(`https://rozisoft-website-backend.vercel.app/project/update-project/${projectId}`, formData)
        .then((response) => {
          console.log(response.data);
          toast.success("Project updated successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to update Project", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    }
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
                          backgroundImage: `url(${formData.backgroundImageUrl})`,
                        }}
                      ></div>
                      <div className="card-content-project">
                        <div className="flex justify-between">
                          <span>{formData.projectCategory}</span>
                          <hr />
                        </div>
                        <p>{formData.projectName}</p>
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
                      value={formData.backgroundImageUrl}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="add Project Category"
                      name="projectCategory"
                      required
                      value={formData.projectCategory}
                      onChange={handleChange}
                    />

                    <input
                      type="text"
                      placeholder="add project name"
                      name="projectName"
                      required
                      value={formData.projectName}
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

export default ProjectEdit;
