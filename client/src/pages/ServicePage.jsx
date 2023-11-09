import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../styles/service-page-styles.css";
import ServicePageCard from "../component/ServicePageCard";

function ServicePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="service-page">
       <Helmet>
        <title>Digital Marketing Services – Here’s what we do|Rozisoft</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={11} lg={11}>
              <Grid
                container
                justifyContent={"center"}
                sx={{ py: { xs: 4, md: 10 } }}
              >
                <Grid item xs={11} lg={8}>
                  <h1 className="heading text-center">What We Do - Services</h1>
                  <p className="text-center">
                    Rozisoft provides complete turn key solutions for any
                    business or industry. We cater to all industries and have a
                    solution to fit every need. From web design, development,
                    marketing, to mobile applications we've got you covered. Why
                    deal with multiple companies when you can hire one to do it
                    all. We employ some of the best in the industry and provide
                    value, integrity and results in every service we provide. So
                    whether its networking a small or large office or getting
                    your website to rank for better traffic we can help. Pick up
                    the phone today and see how Rozisoft can help your business
                    grow.
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12}>
                <ServicePageCard />
              </Grid>
            </Grid>
          </Grid>

          <Footer />
        </>
      )}
    </div>
  );
}

export default ServicePage;
