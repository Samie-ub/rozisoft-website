import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/pages.styles.css";

function HospitalityPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="blog-page">
      <Helmet>
        <title>Hospitality</title>
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
                sx={{ py: { xs: 0, md: 6 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <h1 className="page-head">Hospitality</h1>
                  <p className="page-para">
                    Rozisoft helps hotels and businesses in a big way. They give
                    special solutions that are carefully made to meet all the
                    needs of these places. The main goal is to make sure guests
                    have a really good experience. Rozisoft does this by paying
                    close attention to what clients want. They truly understand
                    what clients need, going beyond just hearing to deeply grasp
                    each client's unique requirements. 
                  </p>
                </Grid>
                <Grid  item xs={12} md={6} lg={6} sx={{display:{xs:"none",md:"block"}}}>
                  <img
                    className="full-width"
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699770994/hospitality_hoamhe.webp"
                    alt="industries content"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{ py: { xs: 4, md: 6 } }}
              >
                <Grid  item xs={12} md={6} lg={6} sx={{display:{xs:"none",md:"block"}}}>
                  <img
                    className="full-width"
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699790501/Business_solution-bro_kjn36t.png"
                    alt="industries content"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                
                  <p className="page-para">
                  With this understanding,
                    Rozisoft goes the extra mile by providing custom solutions
                    that are made exactly to be better than what clients expect.
                    Basically, Rozisoft is like a guiding light in the
                    hospitality industry. They don't just offer services; they
                    create a place where what clients need and great solutions
                    come together to make the guest experience even better.
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

export default HospitalityPage;
