import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/pages.styles.css";
function NewsPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="blog-page">
      <Helmet>
        <title>News</title>
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
                sx={{ py: { xs: 6, md: 10 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <h1 className="page-head">News</h1>
                  <p className="page-para">
                    Rozisoft plays a pivotal role in simplifying the operations
                    of news organizations, serving as a dedicated partner to
                    enhance their overall efficiency. Our commitment is
                    reflected in the comprehensive solutions we offer,
                    meticulously designed to cater to the diverse needs of news
                    outlets. The ultimate aim is to not just meet but surpass
                    the expectations of these organizations, creating an
                    enriched and seamless experience for their readers.
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
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699770994/News-Websites_dwlr2y.png"
                    alt="industries content"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 6, md: 4 } }}
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
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699792719/News-bro_btsnse.png"
                    alt="industries content"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  
                  <p className="page-para">
                    At the core of our approach is a dedication to understanding
                    the unique requirements of news outlets. It goes beyond mere
                    acknowledgment; we actively seek to comprehend the
                    intricacies of their needs. This profound understanding
                    becomes the cornerstone for crafting solutions that are
                    perfectly tailored, going above and beyond the initial
                    expectations set by news organizations.
                  </p>
                  <p className="page-para">
                    By offering thoughtful and comprehensive solutions, Rozisoft
                    aims to empower news organizations to thrive in an
                    increasingly competitive and dynamic media landscape. We
                    believe that a tailored and forward-thinking approach to
                    technology and services is not just a necessity but a means
                    to consistently exceed the expectations of our clients in
                    the news industry, contributing to a heightened experience
                    for their valued readers.
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

export default NewsPage;
