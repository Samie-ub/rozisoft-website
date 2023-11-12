import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/pages.styles.css";
function RealEstatePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="blog-page">
      <Helmet>
        <title>Real Estate</title>
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
                sx={{ py: { xs: 6, md: 12 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <h1 className="page-head">Real Estate</h1>
                  <p className="page-para">
                    In real estate, Rozisoft helps businesses by creating
                    websites that give people a great experience when they're
                    looking for homes or properties. We pay close attention to
                    details, making sure the websites we design not only meet
                    but go beyond what our clients expect.
                  </p>
                  <p className="page-para">
                    We start by really understanding what our clients want. We
                    don't just listen; we listen actively and understand their
                    specific needs. This understanding is the basis for creating
                    the best website solution that goes above and beyond what
                    our clients think they need.
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
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699770994/Real_estate_xzm77f.png"
                    alt="industries content"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 6, md: 12 } }}
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
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699791460/House_searching-rafiki_nlihjx.png"
                    alt="industries content"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <p className="page-para">
                    Our goal is to make sure that people searching for homes
                    online have an easy and enjoyable experience. We focus on
                    making websites that are easy to use, showing off homes and
                    properties in a way that looks good and is easy to navigate.
                    We're committed to making the online search for properties
                    positive and efficient.
                  </p>
                  <p className="page-para">
                    We use the latest technologies and design styles in the
                    websites we create. This means our websites not only look
                    good but also work well on different devices like computers,
                    tablets, or smartphones.
                  </p>
                  <p className="page-para">
                    By designing websites with care, Rozisoft wants to make real
                    estate businesses stand out online. We believe that a
                    well-made website is not just a way to show off properties;
                    it's a way to exceed the expectations of both our clients
                    and the people looking for their dream homes.
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
  );
}

export default RealEstatePage;
