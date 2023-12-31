import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import StepCards from "../component/StepCards";
import {
  faqsSmm,
  mainData,
  methodDataSmm,
  smmParaTwo,
} from "../content/servicesContent";
import MethodCards from "../component/MethodCards";
import { smmPara, smmStepData } from "../content/servicesContent";
import Faqs from "../component/Faqs";
function SmmPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="seo-page">
       <Helmet>
        <title>Social Media marketing Services in Islamabad & SMM Company /Agency </title>
        <meta
          name="description"
          content="Rozisoft organizes your Brand and Business by offering top social media marketing services. We deliver you the best results to increase your business brand and sales."
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
            sx={{ py: { xs: 4, md: 0 } }}
          >
            <Grid item xs={11}>
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                    Social Media Marketing Services in Pakistan
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265732/Social-Media_zzxqbi.png" className="full-width" alt="" />
                </Grid>
              </Grid>
              <StepCards data={smmStepData} />
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 4, md: 10 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265729/SMM_bvbomo.png" className="full-width" alt="smm" />
                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                  <div className="smm-content">
                    <h1>
                      HOW IMPORTANT ARE SOCIAL MEDIA MARKETING PLATFORMS FOR
                      YOUR BUSINESS?
                    </h1>
                    {smmPara.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
                </Grid>
              </Grid>
              <MethodCards
                heading="               WHAT WE PROVIDE SOCIAL MEDIA"
                paragraph=""
                data={methodDataSmm}
              />
              <Faqs faqsData={faqsSmm} />

              <Grid
                container
                sx={{
                  justifyContent: { xs: "center", md: "space-between" },
                  py: { xs: 10, md: 15 },
                }}
              >
                <Grid item xs={12} md={6} lg={6}>
                  <div className="smm-content">
                    <h1>HERE’S WHY YOU CHOOSE OUR SOCIAL MEDIA AGENCY</h1>
                    {smmParaTwo.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
                  {mainData.map((content) => {
                    return (
                      <div className="smm-main-points">
                        <h3>{content.title}</h3>
                        <p>{content.para}</p>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={12} md={5} lg={5} sx={{display:{xs:"none",md:"block"}}}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265732/what-is-social-media-marketing_nxhde9.jpg" className="full-width" alt="" />
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

export default SmmPage;
