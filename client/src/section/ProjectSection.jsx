import { Grid } from "@mui/material";
import React from "react";
import ProjectCard from "../component/ProjectCard";

function ProjectSection() {
  return (
    <div className="about-container">
      <Grid container justifyContent={"center"} sx={{pt:{xs:5,md:20}}}>
        <Grid item xs={11} lg={12}>
          <h1 className="heading text-center">Enjoy Our Amazing Projects</h1>
          <p className="text-center">
            At <span className="highlight">Rozisoft</span>, we specialize in
            developing world-class web development solutions for Startups,{" "}
            <br /> SMEs, and Large Enterprises Our work speaks for itself!
          </p>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} pt={10} >
        <Grid item xs={12} md={11.5} lg={11} pb={10}>
          <ProjectCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectSection;
