import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import TabbedInterface from "../component/TabbedInterface";
import StepCards from "../component/StepCards";
import { dmStepData, pointsDm } from "../content/servicesContent";
function DigitalMarketingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="seo-page">
      <Helmet>
        <title>
          Digital Marketing Strategy Development – Best Online Strategy
        </title>
        <meta
          name="discription"
          content="Are you looking for an effective content marketing strategy for your business? Feel free to contact us today!"
        />
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid
            container
            justifyContent={"center"}
            sx={{ pt: { xs: 4, md: 0 }, pb: { xs: 4, md: 0 } }}
          >
            <Grid item xs={11}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ py: { xs: 4, md: 10 } }}
              >
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                    Leading Digital Marketing Agency.
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265731/social_media_marketing_mgm1pn.jpg"
                    className="full-width"
                    alt=""
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Grid
                  item
                  md={8}
                  lg={8}
                  sx={{
                    py: { xs: 4, md: 10 },
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <h1 className="heading upper text-center">
                    Why We are the Best Digital Marketing Agency
                  </h1>
                  <p className="text-center">
                    We craft captivating customer experiences, steering clear of
                    deceptive tactics to expand your customer base
                  </p>
                </Grid>
                <Grid item lg={10}>
                  <TabbedInterface points={pointsDm} />
                </Grid>
              </Grid>
              <StepCards data={dmStepData} />
            </Grid>
          </Grid>

          <Footer />
        </>
      )}
    </div>
  );
}

export default DigitalMarketingPage;
