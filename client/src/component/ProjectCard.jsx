import React, { useState, useEffect } from "react";
import { arrowIcon } from "../assets";
import { Grid } from "@mui/material";
import "../styles/project-card-styles.css";
import "../styles/responsive-mobile.css";

function ProjectCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobileScreen = window.innerWidth <= 767;
  const [projectData, setProjectData] = useState([]);
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectData.length - 3 : prevSlide - 2
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= projectData.length - 3 ? 0 : prevSlide + 2
    );
  };

  useEffect(() => {
    fetch("https://rozisoft-website-backend.vercel.app/project/all-project")
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.error("Error fetching Project data:", error);
      });
  }, []);

  return (
    <div className="project-slider">
      <div
        className="project-container"
        style={{
          transform: `translateX(-${
            currentSlide * (isMobileScreen ? 100 : 34)
          }%)`,
          transition: "transform 0.9s ease-in-out",
        }}
      >
        {projectData.map((content, index) => {
          return (
            <div key={index} className="card">
              <div
                className="card-bg"
                style={{
                  backgroundImage: `url(${content.backgroundImageUrl})`,
                }}
              ></div>
              <div className="card-content-project">
                <div className="flex justify-between">
                  <span>{content.projectCategory}</span>
                  <hr />
                </div>
                <p>{content.projectName}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Grid container justifyContent={"flex-end"}>
        <Grid item xs={12} lg={2}>
          <div className="slider-btn">
            <button onClick={prevSlide} className="prev-button">
              <img src={arrowIcon} className="rotate" alt="slider left icon" />
            </button>
            <button onClick={nextSlide} className="next-button">
              <img src={arrowIcon} alt="slider left icon" />
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectCard;
