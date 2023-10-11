import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { arrowIcon } from "../assets";
import "../styles/blog-card-styles.css";

function BlogCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogData, setBlogData] = useState([]);
  const isMobileScreen = window.innerWidth <= 767;

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? blogData.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= blogData.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    axios
      .get("https://rozisoft-website-backend.vercel.app/blog")
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  const extractWords = (text, start, end) => {
    const words = text.split(" ");
    return words.slice(start, end).join(" ");
  };

  return (
    <div className="service-slider">
      <div
        className="service-container"
        style={{
          transform: `translateX(-${
            currentSlide * (isMobileScreen ? 110 : 32)
          }%)`,
          transition: "transform 0.9s ease-in-out",
        }}
      >
        {blogData.map((content, index) => {
          const excerpt = extractWords(content.content, 10, 20);
          return (
            <div className="blog-card" key={index}>
              <div
                className="back-img"
                style={{ backgroundImage: `url(${content.coverImageUrl})` }}
              >
                <div className="gradient"></div>
              </div>
              <div className="blog-content">
                <div className="upper-tags">
                  <span>{content.category}</span>
                  <span>{new Date(content.date).toDateString()}</span>
                </div>
                <h1>{content.title}</h1>
                <p>{excerpt}</p>
                <NavLink to={`/blog/${content._id}`}>
                  <button className="btn">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      <Grid container sx={{ justifyContent: { xs: "center", md: "flex-end" } }}>
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

export default BlogCards;
