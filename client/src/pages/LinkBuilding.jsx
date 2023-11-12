import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import StepCards from "../component/StepCards";
import MethodCards from "../component/MethodCards";
import {
  lbParaTwo,
  lbStepData,
  methodDatalb,
} from "../content/servicesContent";

function LinkBuilding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="seo-page">
       <Helmet>
        <title>Link Building Services | Best Link Strategy Solutions</title>
        <meta
          name="description"
          content="Establish your online authority and increase your visibility with a robust, results-driven link building strategy."
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
                    Build a Robust Link Strategy and Boost Your Search Rankings
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1698403189/Picture1_ykullq.png"
                    className="full-width"
                    alt=""
                  />
                </Grid>
              </Grid>
              <StepCards data={lbStepData} />
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 4, md: 10 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <img
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1698403470/3_xpfye0.jpg"
                    className="full-width"
                    alt="smm"
                  />
                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                  <div className="smm-content">
                    <h1 className="upper">
                      The Best Link Building Service For Your Business
                    </h1>
                    {lbParaTwo.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
                </Grid>
              </Grid>
              <MethodCards
                heading="Why Choose Rozisoft For Your Link Building Services"
                paragraph="Build a Sustainable Organic Growth Pattern and Achieve Your Goals."
                data={methodDatalb}
              />
            </Grid>
          </Grid>
          <Footer />
        </>
      )}
    </div>
  );
}

export default LinkBuilding;
