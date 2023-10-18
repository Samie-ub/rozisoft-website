import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import MethodCards from "../component/MethodCards";
import { webCover, webCoverII } from "../assets";
import {
  faqsWeb,
  methodDataWeb,
  webMain,
  webPara,
  webParaTwo,
  webStepData,
} from "../content/servicesContent";
import StepCards from "../component/StepCards";
import Faqs from "../component/Faqs";
function WebDevPage() {
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
            sx={{ pt: { xs: 4, md: 0 }, pb: { xs: 4, md: 20 } }}
          >
            <Grid item xs={11}>
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                    SIMPLE TO USE, MODERN DESIGN WEB DEVELOPMENT IN PAKISTAN
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img src={webCover} className="full-width" alt="" />
                </Grid>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Grid item lg={12}>
                  <div className="smm-content">
                    <h1>WEBSITE DEVELOPMENT AGENCY IN PAKISTAN</h1>
                    <div className="smm-main-points">
                      {webPara.map((content) => {
                        return <p>{content}</p>;
                      })}
                    </div>
                  </div>
                </Grid>
              </Grid>
              <StepCards data={webStepData} />
              <MethodCards
                heading="WE PROVIDE A COMPLETE ECOMMERCE WEB DEVELOPMENT SOLUTION"
                paragraph="Are you ready to launch your online store or transition your service-based business into the digital realm? Look no further! ROZISOFT's experts are here to offer you the finest e-commerce web development solution in Pakistan and all over the World, leveraging the power of WordPress Design and Development to create an exceptional online shopping experience for your customers. Our offerings not only encompass top-tier e-commerce web development solutions but also feature the most affordable packages available in Pakistan and worldwide."
                data={methodDataWeb}
              />
              <Grid
                container
                sx={{
                  justifyContent: { xs: "center", md: "space-between" },
                  py: { xs: 10, md: 15 },
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={5}
                  lg={5}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <img src={webCoverII} className="full-width" alt="" />
                </Grid>
                <Grid item xs={10} md={6} lg={6}>
                  <div className="smm-content">
                    <h1>ADVANCED WEB DEVELOPMENT SERVICES</h1>
                    {webParaTwo.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
                  {webMain.map((content) => {
                    return (
                      <div className="smm-main-points">
                        <h3>{content.title}</h3>
                        <p>{content.para}</p>
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
              <Faqs faqsData={faqsWeb} />
            </Grid>
          </Grid>

          <Footer />
        </>
      )}
    </div>
  );
}

export default WebDevPage;
