import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../styles/blog-page-styles.css";
function AllBlogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

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
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
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

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid container justifyContent={"center"}>
            <Grid item xs={11} md={11.5} lg={11}>
              <Grid
                container
                sx={{
                  justifyContent: { xs: "center", sm: "space-between" },
                  pt: { xs: 4, md: 0 },
                  pb: { xs: 4, md: 10 },
                }}
              >
                {blogData.map((content, index) => {
                  const excerpt = extractWords(content.content, 10, 40);
                  const readingTime = calculateReadingTime(content.content);

                  return (
                    <Grid
                      item
                      xs={12}
                      sm={5.9}
                      md={3.8}
                      lg={3.5}
                      sx={{ py: { xs: 4, md: 5 } }}
                    >
                      <div className="blog-card-all full-width" key={index}>
                        <div
                          className="back-img"
                          style={{
                            backgroundImage: `url(${content.coverImageUrl})`,
                          }}
                        >
                          <div className="gradient"></div>
                        </div>
                        <div className="blog-content">
                          <h1>{content.title}</h1>
                        </div>
                        <NavLink
                          className={"button-align"}
                          to={`/blog/${content._id}`}
                        >
                          <button className="btn">Read More</button>
                          <p className="read-time">{`${readingTime} min read`}</p>
                        </NavLink>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>

          <Footer />
        </>
      )}
    </div>
  );
}

export default AllBlogPage;
