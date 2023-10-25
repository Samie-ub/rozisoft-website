import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../styles/blog-card-styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/project-card-styles.css";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="r-arrow" onClick={onClick}>
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="l-arrow" onClick={onClick}>
      <i class="fa-solid fa-arrow-left"></i>
    </div>
  );
}

function ProjectCard() {
  const isMobileScreen = window.innerWidth <= 767;
  const [projectData, setProjectData] = useState([]);

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
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "gap-slider",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="project-slider">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
}

export default ProjectCard;
