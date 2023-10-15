import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { arrowIcon } from "../assets";
import "../styles/Service-card-styles.css";
import { Link } from "react-router-dom";


function ServiceCards() {
  const [serviceData, setServiceData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? serviceData.length - 2 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= serviceData.length - 2 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    fetch("https://rozisoft-website-backend.vercel.app/service/all-service")
      .then((response) => response.json())
      .then((data) => {
        setServiceData(data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, []);


  return (
    <div className="service-slider">
      <div
        className="service-container"
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {serviceData.map((content, index) => {
          return (
            <div key={index} className="service-card">
              <Link to={"/"}>
              <div
                className="service-bg"
                style={{
                  backgroundImage: `url(${content.backgroundImageUrl})`,
                }}
              >
                <div className="gradient-card">
                  <div className="card-content">
                    <hr className="card-line" />
                    <h1>{content.cardTitle}</h1>
                    <span>{content.cardSubServices || ""}</span>
                  </div>
                  <div className="hover-content">
                    <p>Inside our services</p>
                    <ul>
                      {(content.cardServices || "").map(
                        (service, serviceIndex) => (
                          <li key={serviceIndex}>{service.trim()}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
      <Grid container justifyContent={"flex-end"}>
        <Grid item lg={2}>
          <div className="slider-controls">
            <button onClick={prevSlide}>
              <img src={arrowIcon} className="rotate" alt="slider left icon" />
            </button>
            <button onClick={nextSlide}>
              <img src={arrowIcon} alt="slider left icon" />
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServiceCards;
