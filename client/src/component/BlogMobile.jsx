import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { NavLink } from "react-router-dom";
function BlogMobile() {
  const [blogData, setBlogData] = useState([]);
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

  const calculateReadingTime = (text) => {
    const averageWPM = 200;
    const wordCount = text.split(" ").length;
    const readingTimeMinutes = Math.ceil(wordCount / averageWPM);
    return readingTimeMinutes;
  };

  return (
    <div className="blog-mobile-slider">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <>
          {blogData.map((content, index) => {
            const excerpt = extractWords(content.content, 10, 40);
            const readingTime = calculateReadingTime(content.content);

            return (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </div>
  );
}

export default BlogMobile;
