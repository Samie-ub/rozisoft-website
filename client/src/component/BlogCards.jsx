import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../styles/blog-card-styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Service-card-styles.css";

function BlogCards() {
  const [blogData, setBlogData] = useState([]);
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

  useEffect(() => {
    axios
      .get("https://rozisoft-com-backend.vercel.app/blog")
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

  const calculateReadingTime = (text) => {
    const averageWPM = 200;
    const wordCount = text.split(" ").length;
    const readingTimeMinutes = Math.ceil(wordCount / averageWPM);
    return readingTimeMinutes;
  };
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
          arrows:false
        },
      },
    ],
  };
  return (
    <div className="service-slider">
      <Slider {...settings}>
        {blogData.map((content, index) => {
          const excerpt = extractWords(content.content, 10, 40);
          const readingTime = calculateReadingTime(content.content);

          return (
            <div className="blog-card" key={index}>
              <div
                className="back-img"
                style={{ backgroundImage: `url(${content.coverImageUrl})` }}
              >
                <NavLink to={`/blog/${content._id}`}>
                  <div className="overlay-b">
                    <h1>{content.title}</h1>
                    <div className="button-align">
                      <button className="read-btn">Read More</button>
                      <p>{`${readingTime} min read`}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BlogCards;
