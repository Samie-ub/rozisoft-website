import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/pages.styles.css";

function TravelTourism() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="blog-page">
    <Helmet>
      <title>Travel & Tourism</title>
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
                <h1 className="page-head">Travel & Tourism</h1>
                <p className="page-para">
                Rozisoft is here to provide helpful IT solutions specifically tailored for travel and tourism companies. Our main aim is to make sure our clients' customers are really happy, keep coming back, and become loyal fans. How do we do this? Well, our team is like a helpful guide, working closely with our customers to make sure they are completely satisfied. We do this by being excellent at what we deliver and by setting up smart IT systems and business processes that work well together.
                </p>
                <p className="page-para">
                Imagine this: we help travel and tourism companies organize and improve the way they do things. This means they can provide top-notch service to their customers without any hiccups. Plus, we help them keep their costs in check, meet their business goals, handle tricky IT expenses, and make more money in the end. It's like we're the backstage crew making sure everything runs smoothly for our clients, helping them shine in the spotlight of the travel and tourism industry.
                </p>
                <button className="page-btn">
                  <Link to="/service">Learn more</Link>
                </button>
              </Grid>
              <Grid  item xs={12} md={6} lg={6} sx={{display:{xs:"none",md:"block"}}}>
                <img
                  className="full-width"
                  src="https://res.cloudinary.com/dwohygqua/image/upload/v1699770995/travel_and_tourism_uolkfp.png"
                  alt="industries content"
                />
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

export default TravelTourism