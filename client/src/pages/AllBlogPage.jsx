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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Set the number of items per page

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

  // Calculate the index range of the current page
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                {currentBlogs.map((content, index) => {
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
                      key={index}
                    >
                      <div className="blog-card-all full-width" key={index}>
                        <div
                          className="back-img"
                          style={{
                            backgroundImage: `url(${content.coverImageUrl})`,
                          }}
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
                    </Grid>
                  );
                })}
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                sx={{ pb: { xs: 4, md: 10 } }}
              >
                <Grid item lg={4}>
                  <div className="pagination">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>

                    <div className="page-numbers">
                      {Array.from({
                        length: Math.ceil(blogData.length / itemsPerPage),
                      }).map((number, index) => (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={currentPage === index + 1 ? "active" : ""}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={
                        currentPage ===
                        Math.ceil(blogData.length / itemsPerPage)
                      }
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </Grid>
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
