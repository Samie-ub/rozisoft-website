import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/pages.styles.css";

function EducationPage() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
  return (
    <div className="blog-page">
      <Helmet>
        <title>Education</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid container justifyContent={"center"}>
            <Grid item xs={11} md={10.8} lg={10.8}>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{ py: { xs: 0, md: 4 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <h1 className="page-head">Education</h1>
                  <p className="page-para">
                  Rozisoft plays a crucial role in the educational sector by offering a suite of solutions meticulously tailored to meet the diverse needs of schools and educational institutions. The primary objective is to ensure that the educational environment is not only functional but also fosters a truly positive and enriching experience for both students and teachers.
                  </p>
                 
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <img
                    className="full-width"
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699770994/Education_wyts5x.png"
                    alt="industries content"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 4, md: 4 } }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <img
                    className="full-width"
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699791897/Learning-rafiki_zpyxqm.png"
                    alt="industries content"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>

                  <p className="page-para">
                  The process begins with Rozisoft paying meticulous attention to the specific requirements of schools. It goes beyond a surface-level understanding; rather, there is a commitment to deeply comprehending the unique needs and aspirations of each educational institution. This in-depth understanding becomes the cornerstone for crafting solutions that not only align with the immediate needs of schools but also surpass their initial expectations.
                  </p>
                  <p className="page-para">
                  The overarching goal is to enhance the overall educational journey for students and educators alike. Rozisoft focuses on creating comprehensive solutions that not only address the current needs of schools but also anticipate and prepare for future challenges, thereby providing a robust and adaptable foundation for continuous improvement.
                  </p>
                  <Link to="/service">
                  <button className="page-btn">
                    Learn more
                  </button>
                  </Link>
                </Grid>
                
              </Grid>
            </Grid>
          </Grid>

          <Footer />
        </>
      )}
    </div>
  )
}

export default EducationPage