import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import { seoCover } from "../assets";
import TabbedInterface from "../component/TabbedInterface";
import StepCards from "../component/StepCards";
import MethodCards from "../component/MethodCards";
import Faqs from "../component/Faqs";
import RoziServiceCard from "../component/RoziServiceCard";

function SeoPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="seo-page">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid
            container
            justifyContent={"center"}
            sx={{ py: { xs: 4, md: 5 } }}
          >
            <Grid item xs={11}>
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item lg={6}>
                  <h1 className="heading">
                    HERE’S WHAT YOU GET WITH ROZISOFT PROFESSIONAL SEO SERVICES
                    IN PAKISTAN
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img src={seoCover} className="full-width" alt="" />
                </Grid>
              </Grid>
              <StepCards />

              <Grid container justifyContent={"center"}sx={{display:{xs:"none",md:"flex"} }}>
                <Grid item lg={8} sx={{ py: { xs: 4, md: 10 },display:{xs:"none",md:"block"} }}>
                  <h1 className="heading text-center">
                    HOW OUR SEO AGENCY CONDUCTS WEBSITE SEO AUDIT?
                  </h1>
                  <p className="text-center">
                    The most crucial step in any SEO campaign is to do a
                    thorough check of your website. Our SEO agency has strict
                    rules for this audit. Without it, our SEO services wouldn't
                    be complete. Here's how we do it to figure out how your
                    website is doing and plan your SEO campaign.
                  </p>
                </Grid>
                <Grid item lg={11.3}>
                  <TabbedInterface />
                </Grid>
              </Grid>
              <MethodCards />
              <Faqs />
              <RoziServiceCard />
            </Grid>
          </Grid>
          <Footer />
        </>
      )}
    </div>
  );
}

export default SeoPage;
