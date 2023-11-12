import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import { DesignPara, designParaTwo, designStepData, faqsGraphic } from "../content/servicesContent";
import StepCards from "../component/StepCards";
import Faqs from "../component/Faqs";
function GraphicDesignPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="service-page ">
      <Helmet>
        <title>Top Graphic Design Company |Graphic Designing Services</title>
        <meta
          name="description"
          content="Rozisoft Graphics offers a full range of graphic design services - we can create your entire brand identity or a few pieces of print collateral."
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
            sx={{ pt: { xs: 4, md: 0 }, pb: { xs: 4, md: 20 } }}
          >
            <Grid item xs={11}>
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                  Exceptional graphic design Services IN PAKISTAN.
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265726/graphic_designing_gyghac.png" className="full-width" alt="" />
                </Grid>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Grid item lg={11}>
                  <div className="smm-content">
                    <h1 className="upper">What our graphic design services can do for you</h1>
                    <div className="smm-main-points">
                      {DesignPara.map((content) => {
                        return <p>{content}</p>;
                      })}
                    </div>
                  </div>
                </Grid>
              </Grid>
              <StepCards data={designStepData}/>
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 4, md: 10 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265727/graphic_design_dnrmho.jpg" className="full-width" alt="smm" />
                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                  <div className="smm-content">
                    <h1 className="upper">
                    Quality Graphic Design | Brand Consistency
                    </h1>
                    {designParaTwo.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
                </Grid>
              </Grid>
              <Faqs faqsData={faqsGraphic} />
            </Grid>
          </Grid>
        
          <Footer />
        </>
      )}
    </div>
  );
}

export default GraphicDesignPage;
